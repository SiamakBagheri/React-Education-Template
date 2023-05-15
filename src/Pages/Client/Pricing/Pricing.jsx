import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import PricingCard from "../../../Components/PricingCard/PricingCard";
import "./style.css";
const Pricing = () => {
  return (
    <>
      <Breadcrumbs title="Pricing">
        Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
        id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
        aperiam consequatur laboriosam nemo harum praesentium.
      </Breadcrumbs>
      <section id="pricing" class="pricing">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <PricingCard title="Free" price="0">
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li class="na">Pharetra massa</li>
              <li class="na">Massa ultricies mi</li>
            </PricingCard>

            <PricingCard title="Business" price="19" featured={true}>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li class="na">Massa ultricies mi</li>
            </PricingCard>

            <PricingCard title="Developer" price="29">
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </PricingCard>

            <PricingCard title="Advanced" price="49" advanced={true}>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </PricingCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
