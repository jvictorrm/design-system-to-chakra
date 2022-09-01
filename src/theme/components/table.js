export default {
  Table: {
    baseStyle: {
      th: {
        bg: 'neutral.200',
        color: 'neutral.700',
        textTransform: 'none',
      },
      td: {
        color: 'neutral.700',
      },
    },
    variants: {
      striped: {
        th: {
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: '28px',
        },
        tbody: {
          tr: {
            '&:nth-of-type(odd)': {
              'th, td': {
                borderBottomWidth: '1px',
                borderColor: '#fff',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: '400',
              },
              td: {
                bg: '#fff',
              },
            },
          },
        },
      },
    },
    defaultProps: {
      variant: 'striped',
      colorScheme: 'neutral',
    },
  },
};
