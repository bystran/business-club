import React from 'react';
import PerkBox from '../PerkBox';
import { ReactComponent as HorizonsIcon } from '../../assets/icons/horizons.svg';
import { ReactComponent as NetworkIcon } from '../../assets/icons/network.svg';
import { ReactComponent as NewSkillsIcon } from '../../assets/icons/new_skills.svg';

import '../../sass/sections/Perks.scss';

const Perks = () => (
  <div className="section-perks">
    <div className="perks-content-wrapper">
      <h2 className="inverse-accent-color">
        One of the largest academic societies on campus
      </h2>
      <h1 className="inverse-color">
        We help to get you further
      </h1>
      <div className="perk-list">
        <PerkBox
          icon={<NetworkIcon />}
          heading="Grow your network"
        >
          Get a glimpse of what your future work might look like
        </PerkBox>
        <PerkBox
          icon={<NewSkillsIcon />}
          heading="Gain new skills"
        >
          Acquire skills that will lead to your professional success
        </PerkBox>
        <PerkBox
          icon={<HorizonsIcon />}
          heading="Broaden your horizons"
        >
          Get exposed to new ideas and possible career paths
        </PerkBox>
      </div>
    </div>

  </div>
);

export default Perks;
