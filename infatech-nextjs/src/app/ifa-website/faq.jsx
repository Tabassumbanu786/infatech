import React from 'react';
import { CheckCircle } from 'lucide-react';

const FAQSection = () => {
  return (
<section className="py-5 bg-white">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold display-6 text-dark mb-3">Frequently Asked Questions</h2>
      <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
        Everything you need to know about getting your professional website
      </p>
    </div>

    <div className="row gy-4">
      {/* FAQ 1 */}
      <div className="col-12">
        <div className="p-4 rounded-4 border" style={{ background: 'linear-gradient(to bottom right, #fff7ed, #ffe4e6)', borderColor: '#fdba74' }}>
          <div className="d-flex align-items-center">
            <div className="me-3 d-flex align-items-center justify-content-center rounded" style={{ width: '40px', height: '40px', backgroundColor: '#f97316' }}>
              <CheckCircle className="text-white" />
            </div>
            <div>
              <h5 className="fw-semibold text-dark mb-2">Is the domain included?</h5>
              <p className="text-muted mb-0"><span className="text-success fw-semibold">✅ Yes</span> — we register & manage it for you. One simple annual renewal.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ 2 */}
      <div className="col-12">
        <div className="p-4 rounded-4 border" style={{ background: 'linear-gradient(to bottom right, #ffe4e6, #fce7f3)', borderColor: '#fca5a5' }}>
          <div className="d-flex align-items-center">
            <div className="me-3 d-flex align-items-center justify-content-center rounded" style={{ width: '40px', height: '40px', backgroundColor: '#ef4444' }}>
              <CheckCircle className="text-white" />
            </div>
            <div>
              <h5 className="fw-semibold text-dark mb-2">Do I need to do anything technical?</h5>
              <p className="text-muted mb-0"><span className="text-success fw-semibold">✅ No</span> — just choose a design, send your info, and approve the preview.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ 3 */}
      <div className="col-12">
        <div className="p-4 rounded-4 border" style={{ background: 'linear-gradient(to bottom right, #fef9c3, #ffedd5)', borderColor: '#facc15' }}>
          <div className="d-flex align-items-center">
            <div className="me-3 d-flex align-items-center justify-content-center rounded" style={{ width: '40px', height: '40px', backgroundColor: '#facc15' }}>
              <CheckCircle className="text-white" />
            </div>
            <div>
              <h5 className="fw-semibold text-dark mb-2">Can I change designs later?</h5>
              <p className="text-muted mb-0"><span className="text-success fw-semibold">✅ Yes</span>, you can switch designs for a small fee if needed.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ 4 */}
      <div className="col-12">
        <div className="p-4 rounded-4 border" style={{ background: 'linear-gradient(to bottom right, #dcfce7, #d1fae5)', borderColor: '#86efac' }}>
          <div className="d-flex align-items-center">
            <div className="me-3 d-flex align-items-center justify-content-center rounded" style={{ width: '40px', height: '40px', backgroundColor: '#22c55e' }}>
              <CheckCircle className="text-white" />
            </div>
            <div>
              <h5 className="fw-semibold text-dark mb-2">Will my website show up on Google?</h5>
              <p className="text-muted mb-0"><span className="text-success fw-semibold">✅ Yes</span> — we do basic SEO so search engines can index your pages.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ 5 */}
      <div className="col-12">
        <div className="p-4 rounded-4 border" style={{ background: 'linear-gradient(to bottom right, #ccfbf1, #e0f2f1)', borderColor: '#5eead4' }}>
          <div className="d-flex align-items-center">
            <div className="me-3 d-flex align-items-center justify-content-center rounded" style={{ width: '40px', height: '40px', backgroundColor: '#06b6d4' }}>
              <CheckCircle className="text-white" />
            </div>
            <div>
              <h5 className="fw-semibold text-dark mb-2">What if I want more pages or a blog?</h5>
              <p className="text-muted mb-0"><span className="text-success fw-semibold">✅ We can add them</span> as paid upgrades.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    
  );
};

export default FAQSection;
