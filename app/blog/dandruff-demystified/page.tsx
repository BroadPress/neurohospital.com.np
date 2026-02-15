import React from "react";
import '@/public/css/blogs.css'

const DandruffDemystified = () => {
  return (
    <>
      <div className="blogs">
        <div className="blogs-div">
          {/* Blog Image */}
          <div className="blog-pic">
            <img
              src="/blog/blog-26.jpg"
              alt="Dandruff Blog"
              className="shadow"
            />
          </div>

          <br />
          <br />

          <p className="blog-name text-center">
            Dandruff Demystified
          </p>

          <p className="text-center text-dark">
            Hair Care • 8 Feb, 2026
          </p>

          <p>
            Hair is often considered a crowning glory, a key component of our overall attractiveness. 
            However, for many, this beauty is marred by the persistent annoyance of dandruff, 
            especially during the colder months.
          </p>

          <p>
            Dandruff is a common scalp condition that causes small, white, flaky patches of dead skin to shed. 
            While it can occur year-round, it often intensifies in winter, leading to frustrating and relentless itching. 
            Understanding what causes dandruff is the first step toward effective treatment.
          </p>

          <p className="blog-heading">What Exactly is Dandruff?</p>

          <p>
            Dandruff is fundamentally related to the natural cycle of skin cell renewal on the scalp. 
            When this process speeds up, clusters of dead skin cells become visible as flakes.
          </p>

          <p>Dandruff generally manifests in two main ways:</p>

          <ul>
            <li>
              <b>Oily/Greasy Dandruff:</b> Caused by excessive oil production on the scalp.
            </li>
            <li>
              <b>Fungal Dandruff:</b> Often triggered by an overgrowth of a yeast-like fungus naturally present on the skin, known as <i>Malassezia</i>.
            </li>
          </ul>

          <p>
            While dandruff is not contagious, it can be triggered by hormonal changes, genetics, high stress, 
            or underlying health issues like fever.
          </p>

          <p className="blog-heading">8 Primary Causes Behind Your Flaky Scalp</p>

          <ol>
            <li><b>Sebum Overproduction (Oily Scalp):</b> Excessive oil creates a breeding ground for fungi like Malassezia.</li>
            <li><b>Fungal Infection (Malassezia Fungus):</b> An imbalance accelerates skin cell turnover, causing flakes.</li>
            <li><b>Poor Hygiene:</b> Infrequent shampooing or leaving excessive oil/styling products allows fungi to grow.</li>
            <li><b>Dry Scalp:</b> Cold weather, frequent washing, or harsh shampoos strip scalp moisture.</li>
            <li><b>Stress:</b> Mental stress disrupts hormonal balance, triggering flare-ups.</li>
            <li><b>Use of Wrong Products:</b> Harsh shampoos, gels, or sprays can irritate and inflame the scalp.</li>
            <li><b>Nutritional Deficiencies:</b> Lack of Vitamin B, Zinc, and Omega-3 weakens scalp health.</li>
          </ol>

          <p className="blog-heading">Effective Treatment Strategies</p>

          <p>Treating dandruff requires consistency and the right approach:</p>

          <p><b>1. Use the Right Shampoo</b></p>
          <p>Choose anti-fungal or medicated shampoos containing:</p>
          <ul>
            <li>Ketoconazole</li>
            <li>Zinc Pyrithione</li>
            <li>Selenium Sulfide</li>
            <li>Coal Tar</li>
          </ul>
          <p>Use 2–3 times per week initially.</p>

          <p><b>2. The Step-Down Method</b></p>
          <ul>
            <li>Use once a week until symptoms disappear</li>
            <li>Then once a month</li>
            <li>Finally, discontinue when scalp is stable</li>
          </ul>

          <p><b>3. Maintain Scalp Cleanliness</b></p>
          <p>Avoid going many days without washing your hair. Use a mild shampoo when sweating.</p>

          <p><b>4. Avoid Excessive Oil Application</b></p>
          <p>Too much oil can trap fungus on the scalp and worsen dandruff.</p>

          <p className="blog-heading">Essential Prevention Tips for a Healthy Scalp</p>
          <ul>
            <li>Avoid leaving oil on hair or skipping washes for long periods</li>
            <li>Apply conditioner only to hair shaft, not scalp</li>
            <li>Do not comb or brush wet hair</li>
            <li>Stay hydrated by drinking plenty of water</li>
            <li>Reduce use of excessively hot showers</li>
            <li>Eat foods rich in Vitamin D, Zinc, and Omega-3 (eggs, fish, yogurt, nuts, leafy greens)</li>
          </ul>

          <p className="blog-heading">When to Consult a Specialist</p>
          <ul>
            <li>Excessive itching or redness (possible psoriasis)</li>
            <li>Sores, scabs, or lesions forming on the scalp</li>
            <li>No improvement after 2–3 weeks of consistent anti-fungal shampoo use</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DandruffDemystified;
