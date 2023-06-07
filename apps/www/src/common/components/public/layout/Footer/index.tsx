import Image from 'next/image';
import Link from 'next/link';
import LinkedInIcon from '../../../ui/icons/linked-in.icon';

export default function Footer() {
  return (
    <footer className="flex flex-col flex-0">
      {/* Dark Footer */}
      <div className="bg-bcgov-gray-dark">
        <div className="container flex flex-col flex-0 gap-4 mx-auto py-8 text-sm text-white">
          <p>
            The B.C. Public Service acknowledges the territories of First Nations around B.C. and is grateful to carry
            out our work on these lands. We acknowledge the rights, interests, priorities, and concerns of all
            Indigenous Peoples-First Nations, Métis, and Inuit-respecting and acknowledging their distinct cultures,
            histories, rights, laws, and governments.
          </p>
          <hr />
          <div className="flex flex-row gap-8 pt-4 my-auto">
            <Link className="underline" href="/">
              Digital Talent Home
            </Link>
            <Link className="underline" href="/hiring-managers/cross-ministry-hiring">
              Cross-Ministry Hiring
            </Link>
            <Link className="underline" href="/hiring-managers/learn/about-digital-talent">
              About Digital Talent
            </Link>
            <a
              className="underline"
              href="https://www.linkedin.com/company/bc-gov-csi-lab/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Navigation */}
      <div className="bg-white flex flex-row w-screen">
        <div className=" container grid grid-cols-1 md:grid-cols-6 gap-4 my-auto py-4 text-sm text-center">
          <div className="font-semibold my-auto shrink-0">
            <a href="https://digital.gov.bc.ca">DIGITAL.GOV.BC.CA</a>
          </div>
          <div className="my-auto shrink-0">
            <a href="https://www2.gov.bc.ca/gov/content/home/accessibility" rel="noreferrer" target="_blank">
              Accessibility
            </a>
          </div>
          <div className="my-auto shrink-0">
            <a href="https://www2.gov.bc.ca/gov/content/home/privacy" rel="noreferrer" target="_blank">
              Privacy
            </a>
          </div>
          <div className="my-auto shrink-0">
            <a href="https://www2.gov.bc.ca/gov/content/home/copyright" rel="noreferrer" target="_blank">
              Copyright
            </a>
          </div>
          <div className="my-auto shrink-0">
            <a
              href="https://www2.gov.bc.ca/gov/content?id=79F93E018712422FBC8E674A67A70535"
              rel="noreferrer"
              target="_blank"
            >
              Disclaimer
            </a>
          </div>
          <div className="my-auto shrink-0">
            <a href="https://www2.gov.bc.ca" rel="noreferrer" target="_blank">
              <Image
                priority
                alt="Government of British Columbia Logo"
                className="mx-auto shrink-0"
                height={34}
                src="/bc-logo.png"
                style={{ width: 130, height: 34 }}
                width={130}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
