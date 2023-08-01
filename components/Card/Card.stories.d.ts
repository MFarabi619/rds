import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
declare const meta: Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof Card>;
export declare const Primary: Story;
export declare const WithLink: Story;
export declare const WithBadges: Story;
export declare const WithExcerpt: Story;
export declare const WithImage: Story;
export declare const WithRoundImage: Story;
export declare const WithVideo: Story;
export declare const WithVideoNoHover: {
    args: {
        noLink: boolean;
        children: import("react/jsx-runtime").JSX.Element;
    };
};
export declare const WithBorder: Story;
//# sourceMappingURL=Card.stories.d.ts.map