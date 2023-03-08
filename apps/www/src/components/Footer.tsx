import Container from './Container';

export default function Footer() {
  return (
    <div className="bg-bcgov-grey-dark text-white shrink-0 min-h-80">
      <Container className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-2 gap-x-4">
          <div>
            <span className="font-semibold">Lorem ipsum dolor</span>
            <ul className="mt-2">
              <li>Lorem ipsum dolor </li>
              <li>sit amet, consectetur</li>
              <li>adipiscing elit</li>
              <li>Curabitur blandit faucibus </li>
            </ul>
          </div>
          <div>
            <span className="font-semibold">Lorem ipsum dolor</span>
            <ul className="mt-2">
              <li>Lorem ipsum dolor </li>
              <li>sit amet, consectetur</li>
              <li>adipiscing elit</li>
              <li>Curabitur blandit faucibus </li>
            </ul>
          </div>
          <div>
            <span className="font-light">
              Etiam velit velit, tempor auctor pellentesque eget, faucibus sit amet felis.
            </span>
            <div className="flex flex-row space-x-4 mt-4">
              <div className="w-12 h-12 bg-white rounded-full" />
              <div className="w-12 h-12 bg-white rounded-full" />
              <div className="w-12 h-12 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
