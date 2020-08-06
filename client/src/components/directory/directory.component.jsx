import React from 'react';
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from '@ap.cx/react-fullpage';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      <Fullpage>
        <FullPageSections>
          {sections.map(({ id, ...otherSectionProps }) => (
            <FullpageSection>
              <MenuItem key={id} {...otherSectionProps} />
            </FullpageSection>
          ))}
        </FullPageSections>
      </Fullpage>
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
