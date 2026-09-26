import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #1d2035; background: #f7f8fc; font-synthesis: none; text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; }
  * { box-sizing: border-box; }
  body { margin: 0; min-width: 320px; }
  button, input { font: inherit; }
  button { cursor: pointer; }
`;

export const PageShell = styled.div`
  min-height: 100vh;
  display: flex;
  background: #f7f8fc;
`;
export const Sidebar = styled.aside`
  width: 246px;
  flex: 0 0 246px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 27px 17px 23px;
  background: #fff;
  border-right: 1px solid #eaebf2;
  @media (max-width: 900px) {
    display: none;
  }
`;
export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  color: #1f2141;
`;
export const BrandMark = styled.div`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  color: #fff;
  border-radius: 9px;
  background: linear-gradient(135deg, #7162ec, #9a81f5);
  box-shadow: 0 7px 16px rgba(109, 92, 231, 0.25);
`;
export const BrandName = styled.div`
  font-size: 20px;
  font-weight: 760;
  letter-spacing: -0.8px;
  span {
    color: #7569e8;
  }
`;
export const WorkspaceCard = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 33px 0;
  padding: 9px;
  border: 1px solid #ececf4;
  border-radius: 13px;
  background: #fafaff;
`;
export const WorkspaceAvatar = styled.div`
  width: 31px;
  height: 31px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  color: #6b5fe2;
  font-size: 10px;
  font-weight: 800;
  border-radius: 10px;
  background: #e8e5ff;
`;
export const WorkspaceLabel = styled.div`
  font-size: 9px;
  color: #9a9db0;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  font-weight: 700;
`;
export const WorkspaceName = styled.div`
  font-size: 11px;
  color: #393b53;
  margin-top: 2px;
  font-weight: 650;
`;
export const NavSection = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const NavCaption = styled.div`
  padding: 0 13px 10px;
  color: #b0b3c3;
  font-size: 10px;
  letter-spacing: 0.75px;
  font-weight: 800;
  text-transform: uppercase;
`;
export const NavItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 11px;
  border: 0;
  border-radius: 11px;
  padding: 10px 12px;
  color: ${({ $active }) => ($active ? "#6156d5" : "#85889d")};
  background: ${({ $active }) => ($active ? "#f0efff" : "transparent")};
  font-size: 12px;
  font-weight: ${({ $active }) => ($active ? 720 : 560)};
  text-align: left;
  transition: 0.2s ease;
  &:hover {
    color: #6156d5;
    background: #f5f4ff;
  }
`;
export const NavCount = styled.span`
  margin-left: auto;
  min-width: 20px;
  padding: 1px 5px;
  color: #6a5dde;
  background: #e3e0ff;
  font-size: 10px;
  line-height: 17px;
  text-align: center;
  border-radius: 6px;
`;
export const SidebarBottom = styled.div`
  margin-top: auto;
`;
export const UpgradeCard = styled.div`
  position: relative;
  margin: 0 3px 23px;
  padding: 16px 14px 15px;
  overflow: hidden;
  border: 1px solid #e8e4ff;
  border-radius: 15px;
  background: linear-gradient(145deg, #f5f3ff, #fbfaff);
  &:after {
    content: "";
    position: absolute;
    width: 85px;
    height: 85px;
    right: -31px;
    top: -31px;
    border-radius: 50%;
    border: 15px solid #eeebff;
  }
  strong {
    display: block;
    color: #4a427a;
    font-size: 12px;
    margin: 15px 0 5px;
  }
  p {
    max-width: 130px;
    color: #9793b0;
    font-size: 10px;
    line-height: 1.4;
    margin: 0 0 12px;
  }
`;
export const UpgradeIcon = styled.div`
  width: 29px;
  height: 29px;
  display: grid;
  place-items: center;
  color: #6f61e3;
  border-radius: 9px;
  background: #e9e5ff;
`;
export const UpgradeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #6c60d9;
  font-size: 10px;
  font-weight: 740;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const SidebarFooter = styled.div`
  padding: 0 7px;
  color: #b6b8c7;
  font-size: 9px;
  text-align: center;
  span {
    color: #9385ee;
    font-size: 13px;
  }
`;
export const MainContent = styled.main`
  min-width: 0;
  flex: 1;
`;
export const MobileHeader = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px;
    background: #fff;
    border-bottom: 1px solid #eaebf2;
  }
`;
export const Topbar = styled.header`
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5.6vw;
  border-bottom: 1px solid #eceef4;
  background: rgba(255, 255, 255, 0.62);
  @media (max-width: 900px) {
    height: 58px;
    padding: 0 24px;
  }
`;
export const Breadcrumb = styled.div`
  color: #a0a3b3;
  font-size: 11px;
  font-weight: 600;
  span {
    margin: 0 8px;
    color: #d0d1dc;
  }
`;
export const TopbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
export const HelpButton = styled.button`
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid #d9dae6;
  border-radius: 50%;
  color: #8d90a3;
  background: #fff;
  font-size: 12px;
`;
export const TopAvatar = styled.div`
  width: 29px;
  height: 29px;
  display: grid;
  place-items: center;
  color: #6358c9;
  background: #e8e5ff;
  border-radius: 50%;
  font-size: 9px;
  font-weight: 800;
`;
export const ContentWrap = styled.div`
  width: min(1040px, calc(100% - 11.2vw));
  margin: 0 auto;
  padding: 58px 0 35px;
  @media (max-width: 900px) {
    width: calc(100% - 48px);
    padding-top: 38px;
  }
`;
export const HeroRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  color: #9b9db0;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.35px;
`;
export const PageTitle = styled.h1`
  margin: 15px 0 11px;
  color: #252743;
  font-size: clamp(34px, 4vw, 53px);
  line-height: 0.99;
  letter-spacing: -2.6px;
  font-weight: 780;
  span {
    color: #7164df;
  }
`;
export const PageSubtitle = styled.p`
  color: #9194a8;
  font-size: 13px;
  line-height: 1.65;
`;
export const HeroOrb = styled.div`
  width: 92px;
  height: 92px;
  margin: 9px 5% 0 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: radial-gradient(
    circle at 33% 30%,
    #faf9ff 0 15%,
    #dfdbff 16% 35%,
    #978af1 75%,
    #7668df 100%
  );
  box-shadow:
    inset -10px -12px 20px rgba(85, 75, 190, 0.2),
    0 17px 25px rgba(105, 92, 219, 0.17);
  transform: rotate(-16deg);
  color: #fff;
  font-size: 20px;
  text-shadow: 0 2px 4px rgba(80, 69, 181, 0.25);
  @media (max-width: 650px) {
    width: 55px;
    height: 55px;
    margin-right: 0;
    font-size: 14px;
  }
`;
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 13px;
  margin: 43px 0 47px;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 9px;
    margin: 32px 0;
  }
`;
export const StatCard = styled.div`
  position: relative;
  min-height: 103px;
  padding: 17px;
  border: 1px solid #eaebf2;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 4px 10px rgba(32, 34, 62, 0.02);
  @media (max-width: 650px) {
    min-height: 87px;
  }
`;
export const StatIcon = styled.div`
  width: 31px;
  height: 31px;
  display: grid;
  place-items: center;
  margin-bottom: 7px;
  border-radius: 9px;
  color: ${({ $tone }) =>
    $tone === "purple" ? "#6f61dc" : $tone === "blue" ? "#5790d2" : "#54a77e"};
  background: ${({ $tone }) =>
    $tone === "purple" ? "#efedff" : $tone === "blue" ? "#eaf4ff" : "#e6f8ee"};
`;
export const StatValue = styled.span`
  color: #30334e;
  font-size: 23px;
  line-height: 1;
  font-weight: 770;
  letter-spacing: -1px;
`;
export const StatLabel = styled.span`
  margin-left: 6px;
  color: #9b9eaf;
  font-size: 11px;
`;
export const StatTrend = styled.div`
  position: absolute;
  right: 16px;
  bottom: 17px;
  color: #91a2a0;
  font-size: 9px;
  font-weight: 700;
`;
export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
  @media (max-width: 650px) {
    display: block;
  }
`;
export const SectionTitle = styled.h2`
  margin: 0;
  color: #2f324c;
  font-size: 19px;
  letter-spacing: -0.6px;
  font-weight: 760;
  span {
    display: inline-grid;
    place-items: center;
    min-width: 21px;
    height: 19px;
    margin-left: 5px;
    padding: 0 5px;
    border-radius: 6px;
    color: #7165d8;
    background: #e9e6ff;
    font-size: 10px;
    vertical-align: 3px;
  }
`;
export const ToolbarActions = styled.div`
  display: flex;
  gap: 9px;
  @media (max-width: 650px) {
    margin-top: 13px;
  }
`;
export const SearchBox = styled.label`
  height: 36px;
  width: 190px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 11px;
  color: #a2a5b6;
  border: 1px solid #e6e7ef;
  border-radius: 9px;
  background: #fff;
  &:focus-within {
    border-color: #a89ff1;
    box-shadow: 0 0 0 3px #f0efff;
  }
  input {
    min-width: 0;
    width: 100%;
    border: 0;
    outline: 0;
    color: #42455e;
    background: transparent;
    font-size: 11px;
  }
  input::placeholder {
    color: #b2b4c1;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;
export const ClearSearch = styled.button`
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  color: #9598a9;
  background: transparent;
`;
export const AddButton = styled.button`
  height: 36px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 0 14px;
  color: #fff;
  border: 0;
  border-radius: 9px;
  background: #7164df;
  box-shadow: 0 7px 15px rgba(105, 91, 220, 0.2);
  font-size: 11px;
  font-weight: 730;
  transition: 0.2s ease;
  &:hover {
    background: #6356d0;
    transform: translateY(-1px);
  }
  @media (max-width: 650px) {
    flex: 0 0 auto;
  }
`;
export const FormCard = styled.form`
  margin-bottom: 18px;
  padding: 19px;
  border: 1px solid #ddd9ff;
  border-radius: 15px;
  background: #fbfaff;
  box-shadow: 0 7px 22px rgba(92, 80, 190, 0.06);
`;
export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;
export const FormKicker = styled.div`
  color: #8075df;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1px;
`;
export const FormTitle = styled.h3`
  margin: 5px 0 0;
  color: #353752;
  font-size: 17px;
  letter-spacing: -0.5px;
`;
export const CloseButton = styled.button`
  display: grid;
  place-items: center;
  width: 27px;
  height: 27px;
  padding: 0;
  color: #8e91a4;
  border: 1px solid #e7e5f4;
  border-radius: 8px;
  background: #fff;
  &:hover {
    color: #6057c8;
    border-color: #c9c2fb;
  }
`;
export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1.3fr 1fr;
  gap: 12px;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  label {
    color: #777a91;
    font-size: 10px;
    font-weight: 700;
  }
  input {
    width: 100%;
    height: 37px;
    padding: 0 11px;
    color: #30334b;
    border: 1px solid #e5e4f0;
    outline: 0;
    border-radius: 8px;
    background: #fff;
    font-size: 11px;
    transition: 0.2s ease;
  }
  input:focus {
    border-color: #978cf0;
    box-shadow: 0 0 0 3px #eeecff;
  }
`;
export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 15px;
`;
export const CancelButton = styled.button`
  height: 34px;
  padding: 0 14px;
  color: #818499;
  border: 0;
  border-radius: 8px;
  background: transparent;
  font-size: 11px;
  font-weight: 650;
  &:hover {
    background: #f0eff7;
  }
`;
export const SaveButton = styled.button`
  height: 34px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 13px;
  color: #fff;
  border: 0;
  border-radius: 8px;
  background: #7164df;
  font-size: 11px;
  font-weight: 730;
`;
export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 13px;
  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
export const ContactCard = styled.article`
  padding: 17px 17px 13px;
  border: 1px solid #e8e9f0;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(32, 34, 62, 0.025);
  animation: card-in 0.4s both;
  animation-delay: ${({ $delay }) => `${$delay}ms`};
  @keyframes card-in {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 13px;
`;
export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  color: ${({ $tone }) =>
    $tone === "lilac"
      ? "#7064d6"
      : $tone === "peach"
        ? "#bf795e"
        : $tone === "mint"
          ? "#4a9c79"
          : $tone === "sky"
            ? "#5486b7"
            : "#ba6c82"};
  border-radius: 12px;
  background: ${({ $tone }) =>
    $tone === "lilac"
      ? "#eeecff"
      : $tone === "peach"
        ? "#fff0e9"
        : $tone === "mint"
          ? "#e7f8ef"
          : $tone === "sky"
            ? "#e8f3ff"
            : "#ffedf2"};
  font-size: 12px;
  font-weight: 800;
  letter-spacing: -0.3px;
`;
export const CardMenu = styled.button`
  display: grid;
  place-items: center;
  padding: 2px;
  color: #b2b4c1;
  border: 0;
  background: transparent;
  &:hover {
    color: #696c84;
  }
`;
export const ContactName = styled.h3`
  margin: 0 0 10px;
  overflow: hidden;
  color: #30334d;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 740;
  letter-spacing: -0.2px;
`;
export const ContactMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 7px;
  overflow: hidden;
  color: #9295a7;
  font-size: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  svg {
    flex: 0 0 auto;
    color: #b0b2c0;
  }
`;
export const CardDivider = styled.div`
  height: 1px;
  margin: 15px 0 11px;
  background: #f0f0f5;
`;
export const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const EditButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 0;
  color: #7065d6;
  border: 0;
  background: transparent;
  font-size: 10px;
  font-weight: 700;
  &:hover {
    color: #5348bf;
  }
`;
export const DeleteButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 0;
  color: #b6a9ad;
  border: 0;
  background: transparent;
  font-size: 10px;
  font-weight: 650;
  &:hover {
    color: #c45e70;
  }
`;
export const EmptyState = styled.div`
  margin-top: 18px;
  padding: 45px 20px;
  text-align: center;
  border: 1px dashed #d9daea;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.55);
`;
export const EmptyIcon = styled.div`
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  margin: 0 auto 13px;
  color: #776ae1;
  border-radius: 13px;
  background: #efedff;
`;
export const EmptyTitle = styled.h3`
  margin: 0 0 5px;
  color: #454862;
  font-size: 15px;
`;
export const EmptyText = styled.p`
  margin: 0 0 17px;
  color: #999cad;
  font-size: 11px;
`;
export const EmptyButton = styled.button`
  height: 34px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 13px;
  color: #fff;
  border: 0;
  border-radius: 8px;
  background: #7164df;
  font-size: 11px;
  font-weight: 700;
`;
export const FooterNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin-top: 42px;
  color: #b2b4c1;
  font-size: 10px;
  span {
    color: #8c80e9;
    font-size: 13px;
  }
`;
export const Toast = styled.div`
  position: fixed;
  right: 24px;
  bottom: 23px;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 14px;
  color: #fff;
  border-radius: 10px;
  background: #30334d;
  box-shadow: 0 12px 28px rgba(29, 31, 56, 0.2);
  font-size: 11px;
  font-weight: 650;
  animation: toast-in 0.25s ease both;
  @keyframes toast-in {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  svg {
    color: #9be2bc;
  }
`;
