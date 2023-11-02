import React from 'react';
import { Button, Flex } from 'antd';

const Buttons = () => (
    <Flex gap="small" wrap="wrap">
        <Button type="dashed">START A PROJECT</Button>
        <Button type="primary">MORE ABOUT US</Button>
    </Flex>
);
export default Buttons;