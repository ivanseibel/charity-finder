import React, { useCallback, useMemo, useState } from 'react';
import MaterialUIPagination from '@material-ui/lab/Pagination';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      '& .MuiPaginationItem-sizeLarge': {
        fontSize: 14,
        height: 40,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 10,
        paddingRight: 10,
        minWidth: 40,
        borderRadius: 20,
      },
    },
  }),
);

interface PaginationType {
  numberFound?: number | undefined;
  offset?: number | undefined;
  handlePage(page: number): void;
  start?: number | undefined;
}

const Pagination: React.FC<PaginationType> = ({
  numberFound,
  offset = 1,
  handlePage,
  start = 0,
}) => {
  const [actualPage, setActualPage] = useState(0);

  console.log(start);

  const numberOfPages = useMemo(() => {
    return !!numberFound && !!offset
      ? Math.floor(numberFound / (offset > 0 ? offset : 1))
      : 0;
  }, [numberFound, offset]);

  const classes = useStyles();

  return (
    <div
      style={{
        width: '100%',
        height: 50,
        display: 'flex',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: 'whitesmoke',
        borderTopStyle: 'solid',
        borderTopWidth: 1,
      }}
    >
      <MaterialUIPagination
        size="large"
        count={numberOfPages}
        page={actualPage}
        onChange={(event, page) => {
          setActualPage(page);
          handlePage(page * offset - 9);
        }}
        className={classes.root}
      />
    </div>
  );
};

export default Pagination;
