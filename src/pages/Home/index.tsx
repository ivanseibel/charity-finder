/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';

import { createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import * as SC from './styles';
import { ReactComponent as ReactLogo } from '../../public/assets/images/charity-finder-icon-blue.svg';
import { useModal } from '../../hooks/useModal';
import { useSearch } from '../../hooks/useSearch';

interface CountryType {
  name: string | null;
  code2: string | null;
}

interface OrganizationType {
  id: string | null;
  name: string | null;
}

const initialData = {
  country: {
    name: null,
    code2: null,
  },
  organization: {
    name: null,
    id: null,
  },
};

const Home: React.FC = () => {
  const { countries, organizations } = useSearch();

  const [homeCountry, setHomeCountry] = useState<CountryType>(
    initialData.country,
  );
  const [countryServes, setCountryServes] = useState<CountryType>(
    initialData.country,
  );
  const [organization, setOrganization] = useState<OrganizationType>(
    initialData.organization,
  );

  const { handleModal } = useModal();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
        [theme.breakpoints.up('md')]: {
          width: '32%',
        },
      },
      option: {
        fontSize: '2rem',
      },
      input: {
        fontSize: '2rem',
        '& > label': {
          fontSize: '2rem',
        },
      },
    }),
  );

  const classes = useStyles();

  function countryToFlag(isoCode: string) {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, char =>
            String.fromCodePoint(char.charCodeAt(0) + 127397),
          )
      : isoCode;
  }

  const filterOptions = createFilterOptions({
    limit: 200,
    stringify: (option: OrganizationType) => option.name || '',
  });

  useEffect(() => {
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
          . Through this website you can find institutions around the world,
          learn about their projects and make a contribution to those who most
          need our help.
        </p>
      </>
    );

    handleModal(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SC.MainHeader>
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
        <SC.ContentContainer>
          <SC.FiltersContainer>
            <Autocomplete
              value={homeCountry}
              classes={classes}
              options={countries}
              getOptionLabel={(option: CountryType) => option.name || ''}
              renderOption={(option: CountryType) => (
                <>
                  <span style={{ marginRight: 5 }}>
                    {countryToFlag(option.code2 || '')}
                  </span>
                  {option.name} ({option.code2})
                </>
              )}
              autoComplete
              includeInputInList
              renderInput={params => (
                <TextField
                  {...params}
                  classes={{ root: classes.input }}
                  label="Home Countries"
                  margin="normal"
                />
              )}
              onChange={(event, newValue) => {
                setHomeCountry(newValue as CountryType);
              }}
            />
            <Autocomplete
              value={countryServes}
              classes={classes}
              options={countries}
              getOptionLabel={(option: CountryType) => option.name || ''}
              renderOption={(option: CountryType) => (
                <>
                  <span style={{ marginRight: 5 }}>
                    {countryToFlag(option.code2 || '')}
                  </span>
                  {option.name} ({option.code2})
                </>
              )}
              autoComplete
              includeInputInList
              renderInput={params => (
                <TextField
                  {...params}
                  classes={{ root: classes.input }}
                  label="Served Countries"
                  margin="normal"
                />
              )}
              onChange={(event, newValue) => {
                setCountryServes(newValue as CountryType);
              }}
            />
            <Autocomplete
              value={organization}
              classes={classes}
              options={organizations}
              getOptionLabel={(option: OrganizationType) => option.name || ''}
              autoComplete
              includeInputInList
              renderInput={params => (
                <TextField
                  {...params}
                  classes={{ root: classes.input }}
                  label="Organizations"
                  margin="normal"
                />
              )}
              filterOptions={filterOptions}
              onChange={(event, newValue) => {
                setOrganization(newValue as OrganizationType);
              }}
            />
          </SC.FiltersContainer>
          <button
            type="button"
            onClick={() => {
              setHomeCountry(initialData.country);
              setCountryServes(initialData.country);
              setOrganization(initialData.organization);
            }}
          >
            Reset
          </button>
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
