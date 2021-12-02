import { createPopper, Instance } from '@popperjs/core'
import { ReactNode, useCallback, useEffect, useRef } from 'react'
import './style.scss';

export interface PopoverProps {
  children: ReactNode;
  content: ReactNode;
}

export function Popover(props: PopoverProps) {
  const { children, content } = props;
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const popperInstance = useRef <Instance>(null);
  const show = useCallback(() => {
    if (!popperInstance.current || !tooltipRef.current) {
      return
    }
    // Make the tooltip visible
    tooltipRef.current.setAttribute('data-show', '');

    // Enable the event listeners
    popperInstance.current.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }));

    // Update its position
    popperInstance.current.update();
  }, [popperInstance, tooltipRef])
  const hidden = useCallback(() => {
    if (!popperInstance.current || !tooltipRef.current) {
      return
    }
    // Hide the tooltip
    tooltipRef.current.removeAttribute('data-show');

    // Disable the event listeners
    popperInstance.current.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
      ],
    }));
  }, [popperInstance, tooltipRef])
  useEffect(() => {
    if (!triggerRef.current || !tooltipRef.current) {
      return
    }
    const trigger = triggerRef.current;
    const tooltip = tooltipRef.current;
    popperInstance.current = createPopper(trigger, tooltip, {
      placement: 'right'
    })
    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];
    
    showEvents.forEach((event) => {
      trigger.addEventListener(event, show);
    });

    hideEvents.forEach((event) => {
      trigger.addEventListener(event, hidden);
    });



    return () => {
      showEvents.forEach((event) => {
        trigger.removeEventListener(event, show);
      });

      hideEvents.forEach((event) => {
        trigger.removeEventListener(event, hidden);
      });
    }

  }, [triggerRef, tooltipRef, show, hidden])
  return (
    <>
      <span className="block" ref={triggerRef}>
        {children}
      </span>
      <div id="tooltip" role="tooltip" ref={tooltipRef}>
        <div id="arrow" data-popper-arrow></div>
        {content}
      </div>
    </>
  )
}