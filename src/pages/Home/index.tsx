/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';

import { createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as SC from './styles';
import { ReactComponent as ReactLogo } from '../../public/assets/images/charity-finder-icon-blue.svg';
import { useModal } from '../../hooks/useModal';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     select: {
//       fontSize: '2rem',
//     },
//     inputLabel: {
//       fontSize: '2rem',
//     },
//     menuItem: {
//       fontSize: '2rem',
//     },
//   }),
// );

const useStyles = makeStyles({
  option: {
    fontSize: '2rem',
  },
  inputRoot: {
    fontSize: '2rem',
  },
  input: {
    fontSize: '2rem',
    '& > label': {
      fontSize: '2rem',
    },
  },
});

interface HomeCountryType {
  description: string;
  value: number;
}

const homeCountries = [
  { value: 1, description: 'Brazil' },
  { value: 2, description: 'Germany' },
  { value: 3, description: 'Argentina' },
  { value: 4, description: 'Ireland' },
];

const Home: React.FC = () => {
  const [homeCountry, setHomeCountry] = useState('');
  const [countryServes, setCountryServes] = useState('');
  const [orgName, setOrgName] = useState('');

  const { handleModal } = useModal();
  const classes = useStyles();

  // TODO: Move to a config object
  const message = (
    <>
      <h2>Welcome to Charity Finder!</h2>
      <p>
        This site is an independent project that uses the public database made
        available by{' '}
        <a
          style={{ textDecoration: 'none' }}
          href="https://globalgiving.org"
          target="_blank"
          rel="noreferrer"
        >
          GlobalGiving.org
        </a>
        . Through this website you can find institutions around the world, learn
        about their projects and make a contribution to those who most need our
        help.
      </p>
    </>
  );

  useEffect(() => {
    handleModal(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SC.MainHeader>
        {/* TODO: Create a new component for HeaderContainer */}
        <SC.HeaderContainer>
          <div className="container-logo">
            <ReactLogo />
            <div className="container-logo-texts">
              <h1 className="logo-title">CharityFinder</h1>
              <span className="logo-description">Search and do good</span>
            </div>
          </div>
        </SC.HeaderContainer>
      </SC.MainHeader>

      <SC.MainBody>
        {/* TODO: Create a new component for each select component */}
        <SC.ContentContainer>
          <div style={{ width: '100%' }}>
            <Autocomplete
              classes={classes}
              // classes={{option}}
              options={homeCountries}
              getOptionLabel={(option: HomeCountryType) => option.description}
              // id="auto-complete"
              autoComplete
              includeInputInList
              renderInput={params => (
                <TextField
                  {...params}
                  classes={{ root: classes.input }}
                  label="Home Country"
                  margin="normal"
                />
              )}
            />
          </div>

          {/* <FormControl className={classes.formControl}>
            <InputLabel className={classes.inputLabel} id="home-country-label">
              Home Country
            </InputLabel>
            <Select
              labelId="home-country-label"
              id="home-country-select"
              className={classes.select}
              value={homeCountry}
              onChange={e => {
                setHomeCountry(e.target.value as string);
              }}
            >
              {homeCountries.map(hc => (
                <MenuItem className={classes.menuItem} value={hc.value}>
                  {hc.description}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
        </SC.ContentContainer>
      </SC.MainBody>

      <SC.MainFooter>
        <SC.FooterContainer>
          <p>Footer</p>
        </SC.FooterContainer>
      </SC.MainFooter>
    </>
  );
};

export default Home;
