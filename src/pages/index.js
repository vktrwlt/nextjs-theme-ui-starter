import { Div, H1, H2, H3, H4, H5, P, Span } from '../utils/theme/typography'

const Index = () => {
  return (
    <Div p={20}>
      <H1>H1 Heading</H1>
      <H2 color='primary'>H2 Heading</H2>
      <H3>H3 Heading</H3>
      <H4>H4 Heading</H4>
      <H5>H5 Heading</H5>

      <P>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. <Span bg='primary'>It was popularised</Span> in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </P>
    </Div>
  )
}

export default Index
