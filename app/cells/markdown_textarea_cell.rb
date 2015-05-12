class MarkdownTextareaCell < FormCellBase
  def show
    # TODO: Remove 'base' when https://github.com/apotonick/cells/issues/280 is fixed.
    render view: :show, base: [File.dirname(__FILE__)]
  end

  private

  def textarea
    form.text_area options[:name],
      skip_label: true,
      value: options[:value],
      rows: options[:rows] || 10,
      control_col: 'col-sm-12',
      label_col: '',
      data: { toggle: 'markdown', target: "##{preview_id}" }
  end

  def form_group
    form.send(:form_group_builder, name, label: label) do
      yield.html_safe
    end
  end

  def preview_id
    "markdown_textarea_preview_#{name_param}"
  end

  def edit_id
    "markdown_textarea_edit_#{name_param}"
  end
end
