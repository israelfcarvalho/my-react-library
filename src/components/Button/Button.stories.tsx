import React from 'react';
import Button from "./index";

export default {
    title: 'Button',
    component: Button
}

export const Primary: React.ReactNode = () => {
    return (
        <Button
            text="Click me"
            kind="primary"
            type="button"
        />
    )
}