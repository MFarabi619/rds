import { Dispatch, SetStateAction } from '../../../../../node_modules/react';
import { LexicalCommand } from 'lexical';
import { InlineImagePayload } from './../nodes/InlineImageNode';

export declare const CAN_USE_DOM: boolean;
export type InsertInlineImagePayload = Readonly<InlineImagePayload>;
export declare const INSERT_INLINE_IMAGE_COMMAND: LexicalCommand<InlineImagePayload>;
export default function InlineImagePlugin({ captionsEnabled, setCaptionsEnabled, }: {
    captionsEnabled?: boolean;
    setCaptionsEnabled: Dispatch<SetStateAction<boolean>>;
}): JSX.Element | null;
