import React from "react";
import '@/public/css/blogs.css'

const POSP = () => {

  return (
    <>
      <div className="blogs">
        <div className="blogs-div">
          <div className="blog-pic">
            <img
              src="/blog/blog-19.webp"
              alt="blogs-image-19"
              className="shadow"
            />
          </div>

          <br />
          <br />
          <p className="blog-name text-center">
            Polycystic Ovary Syndrome (PCOS)
          </p>
          <p className="text-center text-dark">Health • Jan 25, 2024</p>

          <p>
            Polycystic Ovary Syndrome (PCOS) is a common hormonal condition that
            affects women of reproductive age. It affects an estimated 8–13% of
            reproductive-aged women among which 70% of affected women remain
            undiagnosed worldwide. Stein and Leventhal reported the classic
            symptomatology in 1935.
          </p>
          <p>
            They described a group of women with amenorrhea, infertility,
            hirsutism, and enlarged polycystic ovaries. The authors found that,
            after ovarian biopsy, the women began to menstruate regularly.
          </p>
          <p>
            PCOS can cause hormonal imbalances, irregular periods, excess
            androgen levels, and cysts in the ovaries. Irregular periods,
            usually with a lack of ovulation, can make it difficult to become
            pregnant. PCOS is a leading cause of infertility worldwide.
          </p>
          <p className="blog-heading">Signs and Symptoms:</p>
          <ol>
            <li>
              Menstrual disorders: Heavy, long, intermittent, unpredictable or
              absent periods.
            </li>
            <li>Infertility: This may be due to chronic anovulation.</li>
            <li>Acne or oily skin.</li>
            <li>Hyperandrogenism: Excessive hair on the face or body.</li>
            <li>Alopecia: Male-pattern baldness or hair thinning.</li>
            <li>
              Acanthosis Nigricans: Dark, thick, and velvety patches can form
              especially under skin folds for eg: posterior and lateral folds of
              the neck, the armpits, groin, navel, forehead, etc.
            </li>
            <li>
              Metabolic Syndrome: Central obesity (weight gain, especially
              around the belly), insulin resistance.
            </li>
          </ol>
          <p className="blog-heading">
            People with PCOS are more likely to have other health conditions
            including:
          </p>
          <ol>
            <li>Type 2 diabetes</li>
            <li>Hypertension (High Blood Pressure)</li>
            <li>High Cholesterol</li>
            <li>Heart Disease</li>
            <li>
              Endometrial Cancer (cancer of the inner lining of the uterus)
            </li>
          </ol>
          <p className="blog-heading">Diagnosis criteria</p>
          <p>Presence of two out of three:</p>
          <ol>
            <li> Anovulation/ oligomenorrhea</li>
            <li>
              Clinical or biochemical evidence of hyperandrogenism —
              hirsutism/acne/raised testosterone/ androstenedione/DHEAS and FAI
            </li>
            <li>
              Polycystic ovaries →10cc and more than 12 follicles of 2–9mWomen
              with
            </li>
          </ol>
          <p className="blog-heading">
            Polycystic ovary syndrome may have elevated levels of:
          </p>
          <ol>
            <li>Testosterone</li>
            <li>Estrogen</li>
            <li>Luteinizing</li>
            <li>Insulin</li>
            <li>Anti-müllerian hormone (AMH)</li>
          </ol>
          <p className="blog-heading">Treatment</p>
          <p>PCOS has no cure. Palliative treatment can be given as follows:</p>
          <ol>
            <li>
              <b>Lifestyle changes:</b>
              <br />
              Management of lifestyle habits should be the first-line therapy
              for all women with Polycystic Ovary Syndrome (PCOS) and the target
              should be weight loss (5–10 %) in women with a body mass index
              (BMI) ≥ 25 kg/m2 and prevention of weight gain in women with a BMI
              18.5–24.9 kg/m2. The program should include both reduced dietary
              energy intake and regular exercise.
            </li>
            <li>
              <b>Oral Contraceptive Pill (OCP):</b> <br />
              To regulate the menstrual cycle by medication to treat hormonal
              imbalance and insulin resistance
            </li>
            <li>
              <b>Cyclic Progestogens:</b>
              <br />
              They should be used when contraception is not required and there
              are no signs of hyperandrogenism. Dydrogesterone and
              Medroxyprogesterone Acetate is usually used for 10–14 days every
              two to three months.
            </li>
            <li>
              {" "}
              Metformin and Thiazolidinedione (glitazones) are not as efficient
              as initially shown.
            </li>
            <li>Fertility treatment for infertility</li>
            <li>Skin treatment for ache and hair growth</li>
            <li>
              Laparoscopic procedure -ovarian drilling to destroy
              androgen-producing tissue in the ovaries if the patient does not
              respond to hormonal treatment.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default POSP;
