/** @format */

import { Tracker } from 'meteor/tracker';

import './main.html';

Template.Wrapper.onCreated(function () {
    this.list = [1, 2, 3];
});
Template.Wrapper.helpers({
    list() {
        return Template.instance().list;
    },
});

class DropdownState {
    #itemClass;
    #contentClass;

    constructor() {
        this._isOpen = false;
        this._isOpenDep = new Tracker.Dependency();
    }

    get isOpen() {
        this._isOpenDep.depend();
        return this._isOpen;
    }
    set isOpen(is) {
        this._isOpen = !!is;
        this._isOpenDep.changed();
    }

    get itemClass() {
        return this.#itemClass;
    }
    set itemClass(value) {
        this.#itemClass = value;
    }

    get contentClass() {
        return this.#contentClass;
    }
    set contentClass(value) {
        this.#contentClass = value;
    }
}

/**
 * BlazeDropdown
 */
Template.BlazeDropdown.onCreated(function () {
    this.state = new DropdownState();
    this.autorun(() => {
        this.state.itemClass = Template.currentData().itemClass;
        this.state.contentClass = Template.currentData().contentClass;
    });
});
Template.BlazeDropdown.helpers({
    state() {
        return Template.instance().state;
    },
});

/**
 * BlazeDropdownItem
 */
Template.BlazeDropdownItem.onCreated(function () {
    console.log(Template.currentData());
});

Template.BlazeDropdownItem.helpers({
    class() {
        return this.state.itemClass;
    }
});

Template.BlazeDropdownItem.events({
    'click [data-action="toggle-dropdown-content"]'(event, template) {
        console.log(this);
        this.state.isOpen =
            !this.state.isOpen;
    },
});

/**
 * BlazeDropdownContent
 */
Template.BlazeDropdownContent.onCreated(function () {});

Template.BlazeDropdownContent.helpers({
    class() {
        return this.state.contentClass;
    }
});
Template.BlazeDropdownContent.helpers({
    isOpenClass() {
        return this.state.isOpen ? '-visible' : '';
    },
});
