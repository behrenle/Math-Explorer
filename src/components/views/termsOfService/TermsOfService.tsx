import React from "react";
import Card from "../../common/Card";
import styled from "styled-components";
import usePageView from "../../../hooks/usePageView";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 20px 15%;
`;

const Container = styled(Card)`
  padding-bottom: 20px;

  & p,
  ul {
    margin: 20px;
  }
`;

const TermsOfService: React.FC = () => {
  usePageView("/terms-of-service");

  return (
    <Wrapper>
      <Container>
        <h1>Website Terms and Conditions of Use</h1>

        <h2>1. Terms</h2>

        <p>
          By accessing this Website, accessible from
          https://behrenle.github.io/mathexplorer/, you are agreeing to be bound
          by these Website Terms and Conditions of Use and agree that you are
          responsible for the agreement with any applicable local laws. If you
          disagree with any of these terms, you are prohibited from accessing
          this site. The materials contained in this Website are protected by
          copyright and trade mark law.
        </p>

        <h2>2. Use License</h2>

        <p>
          Permission is granted to temporarily download one copy of the
          materials on Math Explorer's Website for personal, non-commercial
          transitory viewing only. This is the grant of a license, not a
          transfer of title, and under this license you may not:
        </p>

        <ul>
          <li>modify or copy the materials;</li>
          <li>
            use the materials for any commercial purpose or for any public
            display;
          </li>
          <li>
            attempt to reverse engineer any software contained on Math
            Explorer's Website;
          </li>
          <li>
            remove any copyright or other proprietary notations from the
            materials; or
          </li>
          <li>
            transferring the materials to another person or "mirror" the
            materials on any other server.
          </li>
        </ul>

        <p>
          This will let Math Explorer to terminate upon violations of any of
          these restrictions. Upon termination, your viewing right will also be
          terminated and you should destroy any downloaded materials in your
          possession whether it is printed or electronic format. These Terms of
          Service has been created with the help of the{" "}
          <a href="https://www.termsofservicegenerator.net">
            Terms Of Service Generator
          </a>{" "}
          and the{" "}
          <a href="https://www.generateprivacypolicy.com">
            Privacy Policy Generator
          </a>
          .
        </p>

        <h2>3. Disclaimer</h2>

        <p>
          All the materials on Math Explorer’s Website are provided "as is".
          Math Explorer makes no warranties, may it be expressed or implied,
          therefore negates all other warranties. Furthermore, Math Explorer
          does not make any representations concerning the accuracy or
          reliability of the use of the materials on its Website or otherwise
          relating to such materials or any sites linked to this Website.
        </p>

        <h2>4. Limitations</h2>

        <p>
          Math Explorer or its suppliers will not be hold accountable for any
          damages that will arise with the use or inability to use the materials
          on Math Explorer’s Website, even if Math Explorer or an authorize
          representative of this Website has been notified, orally or written,
          of the possibility of such damage. Some jurisdiction does not allow
          limitations on implied warranties or limitations of liability for
          incidental damages, these limitations may not apply to you.
        </p>

        <h2>5. Revisions and Errata</h2>

        <p>
          The materials appearing on Math Explorer’s Website may include
          technical, typographical, or photographic errors. Math Explorer will
          not promise that any of the materials in this Website are accurate,
          complete, or current. Math Explorer may change the materials contained
          on its Website at any time without notice. Math Explorer does not make
          any commitment to update the materials.
        </p>

        <h2>6. Links</h2>

        <p>
          Math Explorer has not reviewed all of the sites linked to its Website
          and is not responsible for the contents of any such linked site. The
          presence of any link does not imply endorsement by Math Explorer of
          the site. The use of any linked website is at the user’s own risk.
        </p>

        <h2>7. Site Terms of Use Modifications</h2>

        <p>
          Math Explorer may revise these Terms of Use for its Website at any
          time without prior notice. By using this Website, you are agreeing to
          be bound by the current version of these Terms and Conditions of Use.
        </p>

        <h2>8. Your Privacy</h2>

        <p>Please read our Privacy Policy.</p>

        <h2>9. Governing Law</h2>

        <p>
          Any claim related to Math Explorer's Website shall be governed by the
          laws of de without regards to its conflict of law provisions.
        </p>
      </Container>
    </Wrapper>
  );
};

export default TermsOfService;
