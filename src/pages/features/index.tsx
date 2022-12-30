import NoPortalExample from "../../components/modals/NoPortalExample";
import PortalExample from "../../components/modals/PortalExample";
import { SectionContainer } from "../../styles/commonStyles";

export default function Features() {
  return (
    <div className="container">
      <SectionContainer>
        <h2>React Portal</h2>
        <div>
          <strong>createPortal(children, domNode):</strong>
        </div>
        <i>
          Portals: provide a first-class way to render children into a DOM node
          that exists outside the DOM hierarchy of the parent component.
        </i>
        <NoPortalExample />
        <PortalExample />
      </SectionContainer>
    </div>
  );
}
