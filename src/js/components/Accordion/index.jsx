import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Accordion extends Component {
  constructor() {
    super();
    this.state = {};
    this.accordion = React.createRef();
  }

  componentDidMount() {
    const accordion = this.accordion.current;
    // Allow for multiple accordion sections to be expanded at the same time
    const allowMultiple = accordion.hasAttribute('data-allow-multiple');
    // Allow for each toggle to both open and close individually
    const allowToggle = (allowMultiple) ? allowMultiple : accordion.hasAttribute('data-allow-toggle');

    accordion.addEventListener('click', this.accordionTrigger.bind(this), false);

    // Bind keyboard behaviors on the main accordion container
    accordion.addEventListener('keydown', this.accordionTriggerKeyDown.bind(this));
    // Minor setup: will set disabled state, via aria-disabled, to an
    // expanded/ active accordion which is not allowed to be toggled close
    if (!allowToggle) {
      // Get the first expanded/ active accordion
      const expanded = accordion.querySelector('[aria-expanded="true"]');

      // If an expanded/ active accordion is found, disable
      if (expanded) {
        expanded.setAttribute('aria-disabled', 'true');
      }
    }
  }

  componentWillUnmount() {
    const accordion = this.accordion.current;
    accordion.removeEventListener('click', this.accordionTrigger);
    accordion.removeEventListener('keydown', this.accordionTriggerKeyDown);
  }

  accordionTrigger(event) {
    const { target } = event;
    const accordion = this.accordion.current;
    // Allow for multiple accordion sections to be expanded at the same time
    const allowMultiple = accordion.hasAttribute('data-allow-multiple');
    // Allow for each toggle to both open and close individually
    const allowToggle = (allowMultiple) ? allowMultiple : accordion.hasAttribute('data-allow-toggle');

    if (target.classList.contains('Accordion-trigger')) {
      // Check if the current toggle is expanded.
      const isExpanded = target.getAttribute('aria-expanded') === 'true';
      const active = accordion.querySelector('[aria-expanded="true"]');

      // without allowMultiple, close the open accordion
      if (!allowMultiple && active && active !== target) {
        // Set the expanded state on the triggering element
        active.setAttribute('aria-expanded', 'false');
        // Hide the accordion sections, using aria-controls to specify the desired section
        accordion.querySelector(`#${active.getAttribute('aria-controls')}`).setAttribute('hidden', '');

        // When toggling is not allowed, clean up disabled state
        if (!allowToggle) {
          active.removeAttribute('aria-disabled');
        }
      }
      if (!isExpanded) {
        // Set the expanded state on the triggering element
        target.setAttribute('aria-expanded', 'true');
        // Hide the accordion sections, using aria-controls to specify the desired section
        accordion.querySelector(`#${target.getAttribute('aria-controls')}`).removeAttribute('hidden');

        // If toggling is not allowed, set disabled state on trigger
        if (!allowToggle) {
          target.setAttribute('aria-disabled', 'true');
        }
      }
      else if (allowToggle && isExpanded) {
        // Set the expanded state on the triggering element
        target.setAttribute('aria-expanded', 'false');
        // Hide the accordion sections, using aria-controls to specify the desired section
        accordion.querySelector(`#${target.getAttribute('aria-controls')}`).setAttribute('hidden', '');
      }
      event.preventDefault();
    }
  }

  accordionTriggerKeyDown(event) {
    const { target } = event;
    const accordion = this.accordion.current;
    // Allow for multiple accordion sections to be expanded at the same time
    const allowMultiple = accordion.hasAttribute('data-allow-multiple');
    // Create the array of toggle elements for the accordion group
    const triggers = Array.prototype.slice.call(accordion.querySelectorAll('.Accordion-trigger'));
    const panels = Array.prototype.slice.call(accordion.querySelectorAll('.Accordion-panel'));

    const key = event.which.toString();
    // 33 = Page Up, 34 = Page Down
    const ctrlModifier = (event.ctrlKey && key.match(/33|34/));

    // Is this coming from an accordion header?
    if (target.classList.contains('Accordion-trigger')) {
      // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
      // 38 = Up, 40 = Down
      if (key.match(/38|40/) || ctrlModifier) {
        const index = triggers.indexOf(target);
        const direction = (key.match(/34|40/)) ? 1 : -1;
        const { length } = triggers;
        const newIndex = (index + length + direction) % length;

        triggers[newIndex].focus();

        event.preventDefault();
      }
      else if (key.match(/35|36/)) {
        // 35 = End, 36 = Home keyboard operations
        switch (key) {
          // Go to first accordion
          case '36':
            triggers[0].focus();
            break;
          // Go to last accordion
          case '35':
            triggers[triggers.length - 1].focus();
            break;
          default:
          // nothing here
        }

        event.preventDefault();
      }
    }
    else if (ctrlModifier) {
      // Control + Page Up/ Page Down keyboard operations
      // Catches events that happen inside of panels
      panels.forEach((panel, index) => {
        if (panel.contains(target)) {
          triggers[index].focus();

          event.preventDefault();
        }
      });
    }
  }

  render() {
    return (
      <dl
        id="accordionGroup"
        role="presentation"
        className="Accordion"
        ref={this.accordion}
        data-allow-multiple
      >
        { /* <!-- Accordion Configuration Options
            data-allow-toggle
              Allow for each toggle to both open and close individually
            data-allow-multiple
              Allow for multiple accordion sections to be expanded at the same time.
              Assumes data-allow-toggle otherwise you would not be able to close any
              of the accordions
            __________
            Ex:
              <dl id="accordionGroup" role="presentation" className="Accordion" data-allow-multiple>

              <dl id="accordionGroup" role="presentation" className="Accordion" data-allow-toggle>

            --> */ }
        <dt role="heading" aria-level="3">
          <button
            aria-expanded="true"
            className="Accordion-trigger"
            aria-controls="sect1"
            id="accordion1id"
            type="button"
          >
            <span className="Accordion-title">
              Personal Information
            </span>
            <span className="Accordion-icon" />
          </button>
        </dt>
        <dd
          id="sect1"
          role="region"
          aria-labelledby="accordion1id"
          className="Accordion-panel"
        >
          <div>
            { /* <!-- constiable content within section,
              may include any type of markup or interactive widgets. -->
              */ }
            Panel 1
          </div>
        </dd>
        <dt role="heading" aria-level="3">
          <button
            aria-expanded="false"
            className="Accordion-trigger"
            aria-controls="sect2"
            id="accordion2id"
            type="button"
          >
            <span className="Accordion-title">
              Billing Address
            </span>
            <span className="Accordion-icon" />
          </button>
        </dt>
        <dd
          id="sect2"
          role="region"
          aria-labelledby="accordion2id"
          className="Accordion-panel"
          hidden
        >
          <div>
            Panel 2
          </div>
        </dd>
        <dt role="heading" aria-level="3">
          <button
            aria-expanded="false"
            className="Accordion-trigger"
            aria-controls="sect3"
            id="accordion3id"
            type="button"
          >
            <span className="Accordion-title">
              Shipping Address
            </span>
            <span className="Accordion-icon" />
          </button>
        </dt>
        <dd
          id="sect3"
          role="region"
          aria-labelledby="accordion3id"
          className="Accordion-panel"
          hidden
        >
          <div>
            Panel 3
          </div>
        </dd>
      </dl>
    );
  }
}
export default Accordion;