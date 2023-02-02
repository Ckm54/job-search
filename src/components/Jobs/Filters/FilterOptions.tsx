import { Button, Stack, styled, Typography } from '@mui/material';
import { palleteColor } from '../../../themes/palleteColor';
import { Specialty } from '../../../types';

type Props = {
  title: string;
  data: Specialty[]
}

const FilterOptions = (props: Props) => {

  const { title, data } = props;

  const FilterBtn = styled(Button)({
    border: `1px solid ${palleteColor.secondary}`,
    display: 'flex',
    borderRadius: "50px",
    padding: "5px 15px",
    width: "100%",
    "&:hover": {
      backgroundColor: "transparent",
      color: palleteColor.grayPallete,
    },
  });

  return (
    <Stack mx={2} mt={2}>
        <Typography>{title}:</Typography>
        <Stack width='100%' overflow={{xs: 'scroll', md: 'visible'}} alignItems={"flex-start"} ml={2}>
          {data.map((item: Specialty, index: number) => (
            <FilterBtn
              key={index}
              sx={{
                backgroundColor: `${
                  item.isActive ? palleteColor.secondary : "transparent"
                }`,
                margin: {sm: "10px 10px 5px 0", xs: "10px 0 5px 0"},
                color: `${
                  item.isActive
                    ? palleteColor.whiteLight
                    : palleteColor.grayPallete
                }`,
              }}
            >
              {item.name}
            </FilterBtn>
          ))}
        </Stack>
      </Stack>
  )
}

export default FilterOptions