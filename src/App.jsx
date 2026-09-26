import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Activity,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleUserRound,
  Edit3,
  Mail,
  Menu,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  Sparkles,
  Trash2,
  Users,
  X,
} from "lucide-react";
import { addContact, deleteContact, updateContact } from "./store";
import {
  GlobalStyle,
  PageShell,
  Sidebar,
  Brand,
  BrandMark,
  BrandName,
  WorkspaceCard,
  WorkspaceAvatar,
  WorkspaceLabel,
  WorkspaceName,
  NavSection,
  NavCaption,
  NavItem,
  NavCount,
  SidebarBottom,
  UpgradeCard,
  UpgradeIcon,
  UpgradeLink,
  SidebarFooter,
  MainContent,
  MobileHeader,
  Topbar,
  Breadcrumb,
  TopbarActions,
  HelpButton,
  TopAvatar,
  ContentWrap,
  HeroRow,
  Eyebrow,
  PageTitle,
  PageSubtitle,
  HeroOrb,
  StatsGrid,
  StatCard,
  StatIcon,
  StatValue,
  StatLabel,
  StatTrend,
  Toolbar,
  SectionTitle,
  ToolbarActions,
  SearchBox,
  ClearSearch,
  AddButton,
  FormCard,
  FormHeader,
  FormKicker,
  FormTitle,
  CloseButton,
  FormGrid,
  Field,
  FormActions,
  CancelButton,
  SaveButton,
  ContactGrid,
  ContactCard,
  CardTop,
  Avatar,
  CardMenu,
  ContactName,
  ContactMeta,
  CardDivider,
  CardActions,
  EditButton,
  DeleteButton,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyText,
  EmptyButton,
  FooterNote,
  Toast,
} from "./styles";

const avatarTones = ["lilac", "peach", "mint", "sky", "rose"];

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function toneFor(name) {
  return avatarTones[name.length % avatarTones.length];
}

function formatPhone(value) {
  const numbers = value.replace(/\D/g, "").slice(0, 11);
  if (numbers.length <= 2) return numbers;
  if (numbers.length <= 7)
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
}

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const [query, setQuery] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [activeNav, setActiveNav] = useState("Todos os contatos");
  const [notice, setNotice] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const filteredContacts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return contacts;
    return contacts.filter((contact) =>
      [contact.name, contact.email, contact.phone].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    );
  }, [contacts, query]);

  const totalWithEmail = contacts.filter((contact) => contact.email).length;
  const recentlyAdded = contacts.filter((contact) => contact.isNew).length;

  useEffect(() => {
    if (!notice) return undefined;
    const timer = window.setTimeout(() => setNotice(""), 2600);
    return () => window.clearTimeout(timer);
  }, [notice]);

  function openCreateForm() {
    setEditingId(null);
    setForm({ name: "", email: "", phone: "" });
    setIsFormOpen(true);
  }

  function openEditForm(contact) {
    setEditingId(contact.id);
    setForm({ name: contact.name, email: contact.email, phone: contact.phone });
    setIsFormOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeForm() {
    setIsFormOpen(false);
    setEditingId(null);
    setForm({ name: "", email: "", phone: "" });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const cleanForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
    };
    if (!cleanForm.name || !cleanForm.email || !cleanForm.phone) return;
    if (editingId) {
      dispatch(updateContact({ id: editingId, changes: cleanForm }));
      setNotice("Contato atualizado com sucesso");
    } else {
      dispatch(addContact(cleanForm));
      setNotice("Novo contato adicionado");
    }
    closeForm();
  }

  function handleDelete(contact) {
    dispatch(deleteContact(contact.id));
    setNotice(`${contact.name.split(" ")[0]} foi removido da sua lista`);
  }

  return (
    <>
      <GlobalStyle />
      <PageShell>
        <Sidebar>
          <Brand>
            <BrandMark>
              <CircleUserRound size={20} strokeWidth={2.4} />
            </BrandMark>
            <BrandName>
              orbit<span>.</span>
            </BrandName>
          </Brand>
          <WorkspaceCard>
            <WorkspaceAvatar>LV</WorkspaceAvatar>
            <div>
              <WorkspaceLabel>Workspace pessoal</WorkspaceLabel>
              <WorkspaceName>Leonardo Vilella</WorkspaceName>
            </div>
            <ChevronDown size={16} color="#9095aa" />
          </WorkspaceCard>
          <NavSection>
            <NavCaption>Menu principal</NavCaption>
            <NavItem
              $active={activeNav === "Todos os contatos"}
              onClick={() => setActiveNav("Todos os contatos")}
            >
              <Users size={18} />
              <span>Todos os contatos</span>
              <NavCount>{contacts.length}</NavCount>
            </NavItem>
            <NavItem
              $active={activeNav === "Atividade recente"}
              onClick={() => setActiveNav("Atividade recente")}
            >
              <Activity size={18} />
              <span>Atividade recente</span>
            </NavItem>
          </NavSection>
          <SidebarBottom>
            <UpgradeCard>
              <UpgradeIcon>
                <Sparkles size={17} />
              </UpgradeIcon>
              <strong>Organize melhor</strong>
              <p>Tenha seus contatos sempre à mão.</p>
              <UpgradeLink href="#contatos">
                Conheça o Orbit <ArrowUpRight size={13} />
              </UpgradeLink>
            </UpgradeCard>
            <SidebarFooter>
              Feito para manter tudo em órbita <span>✦</span>
            </SidebarFooter>
          </SidebarBottom>
        </Sidebar>

        <MainContent>
          <MobileHeader>
            <Brand>
              <BrandMark>
                <CircleUserRound size={20} />
              </BrandMark>
              <BrandName>
                orbit<span>.</span>
              </BrandName>
            </Brand>
            <Menu size={21} />
          </MobileHeader>
          <Topbar>
            <Breadcrumb>Contatos</Breadcrumb>
            <TopbarActions>
              <HelpButton>?</HelpButton>
              <TopAvatar>LV</TopAvatar>
            </TopbarActions>
          </Topbar>
          <ContentWrap id="contatos">
            <HeroRow>
              <div>
                <Eyebrow>CENTRAL DE CONTATOS</Eyebrow>
                <PageTitle>
                  Seus contatos,
                  <br />
                  <span>sem complicação.</span>
                </PageTitle>
                <PageSubtitle>
                  Um lugar simples para guardar as pessoas que fazem
                  <br className="desktopBreak" /> parte da sua rotina.
                </PageSubtitle>
              </div>
              <HeroOrb aria-hidden="true">
                <span>✦</span>
              </HeroOrb>
            </HeroRow>

            <StatsGrid>
              <StatCard>
                <StatIcon $tone="purple">
                  <Users size={18} />
                </StatIcon>
                <StatValue>{contacts.length}</StatValue>
                <StatLabel>contatos salvos</StatLabel>
                <StatTrend>+{recentlyAdded || 1} este mês</StatTrend>
              </StatCard>
              <StatCard>
                <StatIcon $tone="blue">
                  <Mail size={18} />
                </StatIcon>
                <StatValue>{totalWithEmail}</StatValue>
                <StatLabel>com e-mail</StatLabel>
                <StatTrend>lista atualizada</StatTrend>
              </StatCard>
              <StatCard>
                <StatIcon $tone="green">
                  <Check size={18} />
                </StatIcon>
                <StatValue>100%</StatValue>
                <StatLabel>organização</StatLabel>
                <StatTrend>tudo no lugar</StatTrend>
              </StatCard>
            </StatsGrid>

            <Toolbar>
              <SectionTitle>
                Minha lista <span>{filteredContacts.length}</span>
              </SectionTitle>
              <ToolbarActions>
                <SearchBox>
                  <Search size={17} />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Buscar contato..."
                    aria-label="Buscar contato"
                  />
                  {query && (
                    <ClearSearch type="button" onClick={() => setQuery("")}>
                      <X size={14} />
                    </ClearSearch>
                  )}
                </SearchBox>
                <AddButton type="button" onClick={openCreateForm}>
                  <Plus size={18} /> Novo contato
                </AddButton>
              </ToolbarActions>
            </Toolbar>

            {isFormOpen && (
              <FormCard onSubmit={handleSubmit}>
                <FormHeader>
                  <div>
                    <FormKicker>
                      {editingId ? "EDITAR CONTATO" : "NOVO CONTATO"}
                    </FormKicker>
                    <FormTitle>
                      {editingId
                        ? "Atualize os dados"
                        : "Adicione alguém à lista"}
                    </FormTitle>
                  </div>
                  <CloseButton
                    type="button"
                    onClick={closeForm}
                    aria-label="Fechar formulário"
                  >
                    <X size={18} />
                  </CloseButton>
                </FormHeader>
                <FormGrid>
                  <Field>
                    <label htmlFor="name">Nome completo</label>
                    <input
                      id="name"
                      value={form.name}
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                      placeholder="Ex.: Ana Martins"
                      required
                      autoFocus
                    />
                  </Field>
                  <Field>
                    <label htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        setForm({ ...form, email: event.target.value })
                      }
                      placeholder="ana@email.com"
                      required
                    />
                  </Field>
                  <Field>
                    <label htmlFor="phone">Telefone</label>
                    <input
                      id="phone"
                      value={form.phone}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          phone: formatPhone(event.target.value),
                        })
                      }
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </Field>
                </FormGrid>
                <FormActions>
                  <CancelButton type="button" onClick={closeForm}>
                    Cancelar
                  </CancelButton>
                  <SaveButton type="submit">
                    <Check size={17} />{" "}
                    {editingId ? "Salvar alterações" : "Adicionar contato"}
                  </SaveButton>
                </FormActions>
              </FormCard>
            )}

            <ContactGrid>
              {filteredContacts.map((contact, index) => (
                <ContactCard key={contact.id} $delay={index * 35}>
                  <CardTop>
                    <Avatar $tone={toneFor(contact.name)}>
                      {initials(contact.name)}
                    </Avatar>
                    <CardMenu
                      type="button"
                      aria-label={`Ações para ${contact.name}`}
                    >
                      <MoreHorizontal size={19} />
                    </CardMenu>
                  </CardTop>
                  <ContactName>{contact.name}</ContactName>
                  <ContactMeta>
                    <Mail size={14} />
                    {contact.email}
                  </ContactMeta>
                  <ContactMeta>
                    <Phone size={14} />
                    {contact.phone}
                  </ContactMeta>
                  <CardDivider />
                  <CardActions>
                    <EditButton
                      type="button"
                      onClick={() => openEditForm(contact)}
                    >
                      <Edit3 size={14} /> Editar
                    </EditButton>
                    <DeleteButton
                      type="button"
                      onClick={() => handleDelete(contact)}
                    >
                      <Trash2 size={14} /> Remover
                    </DeleteButton>
                  </CardActions>
                </ContactCard>
              ))}
            </ContactGrid>

            {!filteredContacts.length && (
              <EmptyState>
                <EmptyIcon>
                  <Search size={22} />
                </EmptyIcon>
                <EmptyTitle>Nenhum contato encontrado</EmptyTitle>
                <EmptyText>
                  {query
                    ? "Tente buscar por outro nome, e-mail ou telefone."
                    : "Comece adicionando alguém à sua lista."}
                </EmptyText>
                {!query && (
                  <EmptyButton type="button" onClick={openCreateForm}>
                    <Plus size={17} /> Adicionar primeiro contato
                  </EmptyButton>
                )}
              </EmptyState>
            )}
            <FooterNote>
              <span>✦</span> Sua lista fica salva automaticamente neste
              dispositivo.
            </FooterNote>
          </ContentWrap>
        </MainContent>
      </PageShell>
      {notice && (
        <Toast>
          <Check size={17} /> {notice}
        </Toast>
      )}
    </>
  );
}

export default App;
