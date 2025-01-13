import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import InlineForm from '@plone/volto/components/manage/Form/InlineForm';
import View from './View';
import schema from './schema';

const Edit = (props) => {
  const { data = {}, block = null, selected = false, onChangeBlock, intl } = props;
  const blockSchema = schema(intl)

  return (
    <>
      <View {...props} mode="edit" />

      <SidebarPortal selected={selected}>
        <InlineForm
          schema={blockSchema}
          title={blockSchema.title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
