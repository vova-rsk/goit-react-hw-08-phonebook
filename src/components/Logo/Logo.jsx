import { StyledLink, StyledTypography, StyledIcon } from './Logo.styled';

const Logo = () => {
  return (
    <StyledTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <StyledLink to="/">
        <StyledIcon fontSize="large" />
        Phonebook
      </StyledLink>
    </StyledTypography>
  );
};

export default Logo;
