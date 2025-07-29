const TemplateCard = ({ template, disablePreviewModal, onTemplateClick }) => {
    const [isSideModalOpen, setIsSideModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState('right');
    const [isMobile, setIsMobile] = useState(false);
    const cardRef = useRef(null);
  
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);
  
    useEffect(() => {
      if (isSideModalOpen && cardRef.current) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const modalWidth = 320;
        if (cardRect.right + modalWidth > window.innerWidth) {
          setModalPosition('left');
        } else {
          setModalPosition('right');
        }
      }
    }, [isSideModalOpen]);
  
    useEffect(() => {
      if (isSideModalOpen) {
        const handleClickOutside = (event) => {
          if (cardRef.current && !cardRef.current.contains(event.target)) {
            setIsSideModalOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [isSideModalOpen]);
  
    const handleCardClick = () => {
      if (disablePreviewModal) {
        setIsSideModalOpen((prev) => !prev);
      } else {
        onTemplateClick(template);
      }
    };
  
    const handleMouseEnter = () => {
      if (disablePreviewModal && !isMobile) setIsSideModalOpen(true);
    };
  
    const handleMouseLeave = () => {
      if (disablePreviewModal && !isMobile) setIsSideModalOpen(false);
    };
  
    return (
      <div
        ref={cardRef}
        className="position-relative"
        onMouseEnter={!isMobile ? handleMouseEnter : undefined}
        onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      >
        <div
          className={`bg-white border rounded-3 shadow-sm overflow-hidden transition position-relative h-100 ${
            disablePreviewModal ? 'cursor-pointer' : 'cursor-pointer'
          }`}
          onClick={handleCardClick}
        >
          <div className="position-relative">
            <img
              src={template.image}
              alt={template.name}
              className="w-100"
              style={{ height: '14rem', objectFit: 'cover' }}
            />
            <div
              className={`position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center transition overlay-preview ${
                !isMobile ? 'hover-overlay' : ''
              }`}
            >
              <div className={`text-white text-center opacity-0 transition group-hover-opacity`}>
                <Eye size={32} className="mb-2" />
                <span className="fw-semibold">Preview Website</span>
              </div>
            </div>
            <div className="position-absolute top-0 end-0 m-3">
              <span className="badge rounded-pill bg-primary text-white">{template.style}</span>
            </div>
          </div>
  
          <div className="p-4">
            <h3 className="h5 fw-bold text-dark mb-2">{template.name}</h3>
            {template.subtitle && (
              <p className="text-primary fw-semibold mb-2 small">{template.subtitle}</p>
            )}
  
            {disablePreviewModal ? (
              <div className="text-center py-3">
                <div className="d-flex justify-content-center align-items-center bg-primary bg-opacity-10 rounded-circle mx-auto mb-3" style={{ width: 48, height: 48 }}>
                  <Eye size={24} className="text-primary" />
                </div>
                <p className="text-muted small fw-medium">
                  {isMobile ? 'Tap to preview' : 'Click to preview full website'}
                </p>
                {isSideModalOpen && (
                  <div className="mt-2">
                    <span className="badge bg-primary text-white fw-bold animate__pulse">
                      Preview Open ↗
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <>
                <p className="text-muted small mb-3">{template.description}</p>
                <div>
                  {template.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="d-flex align-items-center mb-2">
                      <div className="rounded-circle bg-success me-2" style={{ width: 8, height: 8 }}></div>
                      <span className="text-muted small">{feature}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
  
        {isSideModalOpen && disablePreviewModal && (
          <>
            {isMobile && (
              <div
                className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 z-1040"
                onClick={() => setIsSideModalOpen(false)}
              />
            )}
            <div
              className={`bg-white border rounded-3 shadow-lg p-4 position-absolute ${
                isMobile
                  ? 'position-fixed top-50 start-50 translate-middle z-1050 w-100'
                  : `top-0 z-1050 ${modalPosition === 'right' ? 'start-100 ms-3' : 'end-100 me-3'}`
              } preview-modal`}
              style={{ width: '320px' }}
            >
              {isMobile && (
                <button
                  className="btn-close position-absolute top-0 end-0 m-2"
                  onClick={() => setIsSideModalOpen(false)}
                ></button>
              )}
  
              <div className="position-absolute top-0 end-0 bg-primary text-white px-3 py-1 rounded-pill small fw-bold shadow">
                PREVIEW
              </div>
  
              <div className="mb-3">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-100 rounded border border-primary border-opacity-25"
                  style={{ height: '6rem', objectFit: 'cover' }}
                />
              </div>
  
              <h4 className="h6 fw-bold text-dark mb-2">{template.name}</h4>
  
              {template.subtitle && (
                <p className="text-primary fw-bold bg-primary bg-opacity-10 px-3 py-1 rounded text-center small">
                  {template.subtitle}
                </p>
              )}
  
              <p className="text-muted small mb-3">{template.description}</p>
  
              <div className="mb-4">
                <h6 className="fw-bold text-dark small d-flex align-items-center mb-2">
                  <div className="rounded-circle bg-primary me-2" style={{ width: 8, height: 8 }}></div>
                  Premium Features:
                </h6>
                {template.features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="d-flex align-items-center mb-1">
                    <div
                      className="rounded-circle bg-success me-2 shadow-sm"
                      style={{ width: 10, height: 10 }}
                    ></div>
                    <span className="text-muted small">{feature}</span>
                  </div>
                ))}
                {template.features.length > 4 && (
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-primary me-2 shadow-sm" style={{ width: 10, height: 10 }}></div>
                    <span className="text-primary small fw-bold">
                      +{template.features.length - 4} more features
                    </span>
                  </div>
                )}
              </div>
  
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 rounded p-2 mb-3">
                  <p className="text-primary small fw-bold mb-1">🚀 Ready in 7 days</p>
                  <p className="text-muted small">Fully customizable</p>
                </div>
                <button
                  className="btn btn-primary w-100 fw-bold text-white shadow-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onTemplateClick(template);
                    setIsSideModalOpen(false);
                  }}
                >
                  🎯 Preview Full Website
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };