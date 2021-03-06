/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useEffect, useState } from 'react';
import { createStyles, makeStyles, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DotLoader from 'react-spinners/DotLoader';
import Grid from '@material-ui/core/Grid';
import * as SC from './styles';
import { ReactComponent as ReactLogo } from '../../public/assets/images/charity-finder-icon-blue.svg';
import { useModal } from '../../hooks/useModal';
import { useSearch } from '../../hooks/useSearch';
import { getApi } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import ResultCard from '../../components/ResultCard';

interface CountryType {
  name: string | null;
  code2: string | null;
}

interface OrganizationType {
  id: string | null;
  name: string | null;
}

interface ThemeType {
  id: string;
  name: string;
}

interface ApiProjectOrganizationType {
  id: number;
  name: string;
  logoUrl: string;
}

interface ApiProjectImageType {
  imagelink: string[];
}

interface ApiProjectType {
  id: number;
  title: string;
  organization: ApiProjectOrganizationType;
  need: string;
  image: ApiProjectImageType;
  country: string;
  contactAddress: string;
  contactAddress2: string;
  contactCity: string;
  contactCountry: string;
  contactName: string;
  contactPostal: string;
  contactState: string;
  contactUrl: string;
  activities: string;
}

const Home: React.FC = () => {
  const { countries, organizations } = useSearch();
  const [country, setCountry] = useState<CountryType | null>(null);
  const [theme, setTheme] = useState<ThemeType | null>(null);
  const [themes, setThemes] = useState<ThemeType[]>([]);
  const [organization, setOrganization] = useState<OrganizationType | null>(
    null,
  );
  const [projects, setProjects] = useState<ApiProjectType[]>();
  const [searching, setSearching] = useState(false);

  const { api_key, token } = useAuth();

  const { handleModal } = useModal();

  const min600 = useMediaQuery('(min-width:1052px)');

  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        width: min600 ? '32%' : '100%',
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

  useEffect(() => {
    if (projects) {
      console.log(projects);
    }
  }, [projects]);

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

  const handleSearch = useCallback(async () => {
    if (token) {
      try {
        setSearching(true);
        const api = getApi('services');

        let filter = '';

        if (country) {
          filter = `country:${country?.code2}`;
        } else if (theme) {
          filter = `theme:${theme?.id}`;
        } else if (organization) {
          filter = 'organization';
        }

        const result = await api.get(`search/projects`, {
          params: {
            api_key,
            q: '*',
            filter,
          },
        });

        if (result.data) {
          const { project: apiProjects } = result.data.search.response.projects;

          const newProjects = apiProjects.map((project: ApiProjectType) => {
            return {
              id: project.id,
              title: project.title,
              organization: project.organization,
              need: project.need,
              image: project.image,
              country: project.country,
              contactAddress: project.contactAddress,
              contactAddress2: project.contactAddress2,
              contactCity: project.contactCity,
              contactCountry: project.contactCountry,
              contactName: project.contactName,
              contactPostal: project.contactPostal,
              contactState: project.contactState,
              contactUrl: project.contactUrl,
              activities: project.activities,
            };
          });

          setProjects(newProjects);
        }
      } catch (error) {
        console.log(error.response);
      } finally {
        setSearching(false);
      }
    }
  }, [api_key, country, organization, theme, token]);

  useEffect(() => {
    if (!token) {
      return;
    }

    (async () => {
      const api = getApi('projectservice');
      const response = await api('themes', {
        params: {
          api_key,
        },
      });

      if (response.data) {
        setThemes(response.data.themes.theme);
      }
    })();
  }, [api_key, token]);

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
            <div id="selects">
              <Autocomplete
                value={country}
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
                    label="Countries"
                    margin="normal"
                  />
                )}
                onChange={(event, newValue) => {
                  setCountry(newValue as CountryType);
                  setTheme(null);
                  setOrganization(null);
                }}
              />
              <Autocomplete
                value={theme}
                classes={classes}
                options={themes}
                getOptionLabel={(option: ThemeType) => option.name || ''}
                autoComplete
                includeInputInList
                renderInput={params => (
                  <TextField
                    {...params}
                    classes={{ root: classes.input }}
                    label="Themes"
                    margin="normal"
                  />
                )}
                onChange={(event, newValue) => {
                  setTheme(newValue as ThemeType);
                  setCountry(null);
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
                  setCountry(null);
                  setTheme(null);
                }}
              />
            </div>

            <div id="buttons">
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SearchIcon />}
                  size="medium"
                  style={{ width: 120, fontSize: '1.5rem' }}
                  onClick={handleSearch}
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
                    setCountry(null);
                    setTheme(null);
                    setOrganization(null);
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </SC.FiltersContainer>
          <SC.ResultsContainer>
            {searching === true && (
              <DotLoader color="blue" loading={searching} size={150} />
            )}
            {!searching && !projects && <p>Please do a search</p>}
            {!!projects && projects?.length > 0 && !searching === true && (
              <div style={{ flexGrow: 1, margin: 20 }}>
                <Grid container spacing={3}>
                  {projects?.map((project, index) => (
                    <Grid item xs={6}>
                      <ResultCard
                        activities={project.activities}
                        country={project.country}
                        need={project.need}
                        organizationLogoUrl={project.organization.logoUrl}
                        organizationName={project.organization.name}
                        title={project.title}
                        contactUrl={project.contactUrl}
                        key={String(index)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            )}
          </SC.ResultsContainer>
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
