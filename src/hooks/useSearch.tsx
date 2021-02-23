import React, { createContext, useState, useContext, useEffect } from 'react';
import CountriesJSON from '../data/countries.json';
import OrganizationsJSON from '../data/organizations.json';

interface CountryType {
  name: string;
  code2: string;
}

interface OrganizationType {
  id: string;
  name: string;
}

interface SearchState {
  countries: CountryType[];
  organizations: OrganizationType[];
}

interface SearchContextData {
  countries: CountryType[];
  organizations: OrganizationType[];
  loading: boolean;
}

const initialData = {
  countries: [
    {
      name: 'loading...',
      code2: '',
    },
  ],
  organizations: [
    {
      id: '',
      name: 'loading...',
    },
  ],
};

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

const SearchProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<SearchState>(initialData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const countries = [...CountriesJSON];
    const organizations = [...OrganizationsJSON];
    setData({
      organizations,
      countries,
    });
    setLoading(false);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        countries: data.countries,
        organizations: data.organizations,
        loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = (): SearchContextData => {
  const context = useContext(SearchContext);

  return context;
};

export { useSearch, SearchProvider };
