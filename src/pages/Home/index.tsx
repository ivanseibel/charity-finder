/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useEffect, useState } from 'react';
import { createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import * as SC from './styles';
import { ReactComponent as ReactLogo } from '../../public/assets/images/charity-finder-icon-blue.svg';
import { useModal } from '../../hooks/useModal';
import { useSearch } from '../../hooks/useSearch';
import { getApi } from '../../services/api';

interface CountryType {
  name: string | null;
  code2: string | null;
}

interface OrganizationType {
  id: string | null;
  name: string | null;
}

const Home: React.FC = () => {
  const { countries, organizations } = useSearch();

  const [homeCountry, setHomeCountry] = useState<CountryType | null>(null);
  const [countryServes, setCountryServes] = useState<CountryType | null>(null);
  const [organization, setOrganization] = useState<OrganizationType | null>(
    null,
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

  // TODO: Revalidate requirements and choose new options to filter organizations/projects
  // const handleSearch = useCallback(() => {
  //   const api = getApi('orgservice');

  //   api.get(`all/organizations/active`, {
  //     params: {

  //     }
  //   })
  // }, []);

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
                setCountryServes(null);
                setOrganization(null);
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
                setHomeCountry(null);
                setOrganization(null);
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
                setHomeCountry(null);
                setCountryServes(null);
              }}
            />
          </SC.FiltersContainer>

          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 260,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                endIcon={<SearchIcon />}
                size="medium"
                style={{ width: 120, fontSize: '1.5rem' }}
              >
                Search
              </Button>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<ClearIcon />}
                size="medium"
                style={{ width: 120, fontSize: '1.5rem' }}
                onClick={() => {
                  setHomeCountry(null);
                  setCountryServes(null);
                  setOrganization(null);
                }}
              >
                Reset
              </Button>
            </div>
          </div>
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
