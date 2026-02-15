import React from "react";
import '@/public/css/blogs.css'
const MigraineHeadache = () => {

  return (
    <>
      <div className="blogs">
        <div className="blogs-div">
          <div className="blog-pic">
            <img
              src="/blog/migrane-headache.jpg"
              alt="Migraine-headache"
              className="shadow"
            />
          </div>
          <div className="blogs-width">
            <div className="blog-name text-center">Migraine Headache</div>
            <div className="text-center mb-3">Migraine • Mar 7, 2024</div>
            <div className="blog-p mb-3">
              Migraine is a common disorder which causes a disabling headache
              usually associated with nausea / vomiting and/ or light and Sound
              sensitivity. It is the second most common headache disorder
              overall and is the most common headache presenting to clinicians.
              It has a prevalence of 17 percent in females and 6 percent in
              males.
            </div>
            <div className="blog-p mb-3">
              Migraine headache has strong genetic association and is considered
              to occur secondary to activation of pain sensitive neurons in
              response to various environmental stimuli along with physiological
              and Psychological states.
            </div>
            <div className="blog-p mb-3">
              Inadequate sleep, hunger, lights, sounds, symptoms, and several
              food types are considered.
            </div>
            <div className="blog-heading">Common Triggers</div>
            <ul>
              <li>
                Pulsatile or throbbing headache that is commonly unilateral (one
                sided) but can affect both sides or even entire head along with
                neck sometimes.
              </li>
              <li>
                Patients can also have pain around the eyes and pain increases
                with movement and physical activity.
              </li>
              <li>Headache usually lasts (4–72) hours.</li>
              <li>
                Headache is associated with nausea (80%) and vomiting (50%) and
                patients usually have light and sound sensitivity.
              </li>
              <li>
                Patients may have visual symptoms like blurring of vision, dark
                spots in the field of vision, zig-zag lines or even colorful and
                shimmering lights prior to onset of headache.
              </li>
              <li>
                Headache is mostly so severe that patient is unable to perform
                his/her daily routine works.
              </li>
              <li>
                Sometimes, patients may have double vision, drooping of explids,
                abnormal or altered sensation, redness of eyes, tearing, over
                face or limbs. Rarely, patients can have weakness of one side of
                the body that may last hours to days.
              </li>
              <li>
                Patients with migraine can feel a spinning sensation of self and
                surroundings associated with headache.
              </li>
            </ul>
            <div className="blog-heading">Treatment</div>
            <ul>
              <li>
                <b>Avoidance of triggers:</b>
                Monosodium Glutamate [अजिना मोटो], Sleep disturbances, alcohol,
                chocolates, stress, lights, smoke, hunger, stress etc.
              </li>
              <li>
                <b>Lifestyle Measures:</b>
                Schedule, regular exercise, managing or avoiding triggers
              </li>
              <li>
                There are wide range of Mediations which can be used to
                terminate the migraine attacks.
                <br /> These agents can be given either orally or through other
                routes.
                <br /> Conclusion like Intranasal, intramuscular or intravenous
                depending upon severity along with a combination of Symptoms.{" "}
                <br />
                <b>Commonly used medications are:</b>
                <br /> - Acetaminophen (Paracetamol) <br />- NSAIDS (Naproxen,
                Ibuprofen, Diclofenac, ketorolac etc.)
                <br /> -Triptans (Sumatriptan, Rizatriptan, Zolmitriptan etc.)
              </li>
              <li>
                Preventive therapy: To prevent recurrence and to reduce
                Frequency of attack, preventive therapy is used. <br />
                Patient with frequent attack and even a single extended which is
                longer (&gt;12 hours) (3–4 attacks/month)require preventive
                therapy.
                <br /> Patients need these therapy for at least (6–8) months for
                proper benefit.
                <br />
                Commonly used medications are: <br />- Amitriptyline /
                Nortriptyline <br />- Divalproex sodium <br />
                -Propranolol <br />
                -Topiramate
              </li>
            </ul>
            <div className="blog-heading">Conclusion</div>
            <div>
              Migraine is the most Common Cause of headache related disability
              worldwide. It has a strong genetic component and has various
              triggers. Frequency of headache attack can be significantly
              reduced with proper preventive therapy there by ameliorating a
              patient’s quality of life.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MigraineHeadache;
