(function() {
  var UiComponentsSelect = React.createClass({
    propTypes: {
      remoteOptions: React.PropTypes.string,
      multiple: React.PropTypes.bool,
      options: React.PropTypes.arrayOf(
          React.PropTypes.oneOfType(React.PropTypes.string,
                                    React.PropTypes.arrayOf(React.PropTypes.string))),
      name: React.PropTypes.string,
      selected: React.PropTypes.oneOfType([React.PropTypes.string,
                                           React.PropTypes.arrayOf(React.PropTypes.string)]),
      placeholder: React.PropTypes.string,
      className: React.PropTypes.string
    },

    getInitialState: function() {
      return {
        options: this.normalizeOptions(this.props.options) || []
      };
    },

    normalizeOptions: function(options) {
      if (typeof(_.first(options)) === 'string')
        return _.map(options, function(o) {
          return { value: o, label: o};
        });
      else
        return _.map(options, function(o) {
          return { value: o[1], label: o[0] };
        });
    },

    render: function() {
      var props = _.extend({}, this.props, {
        options: this.state.options
      });

      return React.createElement(Select, props);
    }
  });

  window.ui_components.Select = UiComponentsSelect;
})();
