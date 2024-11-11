import React from 'react';
import { Flex } from '../layouts/Flex';
import { Asterisk } from '../../assets';

interface LabelPropsType extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  accent?: boolean;
}

export const Label = ({
  children,
  accent = false,
  ...rest
}: LabelPropsType) => {
  return (
    <label {...rest} className="text-p5 text-black">
      {!accent && <>{children}</>}
      {accent && (
        <Flex align="center" gap={4}>
          {children}
          <Asterisk size={10} color={'#FF3B30'} />
        </Flex>
      )}
    </label>
  );
};
