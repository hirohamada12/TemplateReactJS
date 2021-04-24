import React from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {useIntl} from 'umi';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const intl = useIntl();
  return (
    <PageContainer content="Welcome to your use" title={''}>
      <div>
        hihi
      </div>
    </PageContainer>
  );
};
