import './index.scss';
import React, { ReactElement, useState } from 'react';
import type { UserMessage } from '@sendbird/chat/message';

import Icon, { IconTypes, IconColors } from '../Icon';
import ImageRenderer from '../ImageRenderer';
import { getClassName, isSentMessage } from '../../utils';

interface Props {
  className?: string | Array<string>;
  message: UserMessage;
  isByMe?: boolean;
  mouseHover?: boolean;
  showFileViewer?: (bool: boolean) => void;
}

export default function S3ThumbnailMessageItemBody({
  className,
  message,
  isByMe = false,
  mouseHover = false,
  showFileViewer,
}: Props): ReactElement {
  const [imageRendered, setImageRendered] = useState(false);

  return (
    <div
      className={getClassName([
        className,
        'sendbird-thumbnail-message-item-body',
        isByMe ? 'outgoing' : 'incoming',
        mouseHover ? 'mouse-hover' : '',
        message?.reactions?.length > 0 ? 'reactions' : '',
      ])}
      onClick={() => {
        if (isSentMessage(message)) {
          showFileViewer(true);
        }
      }}
    >
      <ImageRenderer
        className="sendbird-thumbnail-message-item-body__thumbnail"
        url={message.message}
        alt={message.message}
        width="360px"
        height="270px"
        onLoad={() => { setImageRendered(true) }}
        placeHolder={(style) => (
          <div
            className="sendbird-thumbnail-message-item-body__placeholder"
            style={style}
          >
            <div className="sendbird-thumbnail-message-item-body__placeholder__icon">
              <Icon
                type={IconTypes.PHOTO}
                fillColor={IconColors.ON_BACKGROUND_2}
                width="34px"
                height="34px"
              />
            </div>
          </div>
        )}
      />
      <div className="sendbird-thumbnail-message-item-body__image-cover" />
    </div>
  );
}
