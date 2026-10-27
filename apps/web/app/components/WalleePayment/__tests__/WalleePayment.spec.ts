import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import WalleePayment from '../WalleePayment.vue';
import type { WalleePaymentProps } from '../types';

describe('WalleePayment', () => {
  const defaultProps: WalleePaymentProps = {
    // Add default props for testing
  };

  it('renders correctly', () => {
    const wrapper = mount(WalleePayment, {
      props: defaultProps
    });
    
    expect(wrapper.find('[data-testid="walleepayment"]').exists()).toBe(true);
  });

  it('accepts props correctly', () => {
    const wrapper = mount(WalleePayment, {
      props: defaultProps
    });
    
    // Test that props are handled correctly
    expect(wrapper.props()).toEqual(defaultProps);
  });
});
