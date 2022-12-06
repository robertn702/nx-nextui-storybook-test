import { ContainerProps, keyframes, styled } from '@nextui-org/react';
import React, { useMemo } from 'react';

export interface PulseIconProps {
  size?: number;
  color?: NonNullable<ContainerProps['css']>['backgroundColor'];
  css?: ContainerProps['css'];
}

const SIZE_INNER_RATIO = 0.5;

export const PulseIcon: React.FC<PulseIconProps> = ({
  size = 16,
  color = '$red600',
  css,
}) => {
  const sizeInner = size * SIZE_INNER_RATIO;
  const wrapperCss = useMemo(
    () => ({
      ...css,
      width: size,
      height: size,
    }),
    [css, size]
  );

  return (
    <Wrapper css={wrapperCss}>
      <InnerPulse
        css={{
          backgroundColor: color,
          top: (size - sizeInner) / 2,
          left: (size - sizeInner) / 2,
          width: sizeInner,
          height: sizeInner,
          borderRadius: sizeInner,
        }}
      />
      <OuterPulse
        css={{
          backgroundColor: color,
          width: size,
          height: size,
          borderRadius: size,
        }}
      />
    </Wrapper>
  );
};

const pulse = keyframes({
  '0%': {
    transform: 'scale(0.33)',
  },
  '80%': {},
  '100%': {
    opacity: 0,
  },
});

const circle = keyframes({
  '0%': {
    transform: 'scale(0.8)',
  },
  '50%': {
    transform: 'scale(1)',
  },
  '100%': {
    transform: 'scale(0.8)',
  },
});

const Wrapper = styled('div', {
  position: 'relative',
  paddingLeft: 0,
  paddingRight: 0,
});

const OuterPulse = styled('div', {
  display: 'block',
  backgroundColor: '$primary',
  animation: `${pulse} 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite`,
});

const InnerPulse = styled('div', {
  position: 'absolute',
  backgroundColor: '$primary',
  animation: `${circle} 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
});
