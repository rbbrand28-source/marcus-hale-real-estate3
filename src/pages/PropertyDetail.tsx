import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Bed, Bath, Maximize, MapPin, Calendar, ArrowLeft, ArrowRight,
  Video, Camera, Lock, Check, Shield, Leaf, ChevronDown, Star,
  Phone, Mail, Calendar as CalendarIcon, FileText, Eye, Home, TreePine,
} from "lucide-react";
import { getPropertyBySlug, properties } from "@/data/content";
import PropertyCard from "@/components/PropertyCard";
import { cn } from "@/lib/utils";

export default function PropertyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const property = slug ? getPropertyBySlug(slug) : undefined;

  const [activeImage, setActiveImage] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [privateUnlocked, setPrivateUnlocked] = useState(false);
  const [privatePassword, setPrivatePassword] = useState("");
  const [showInquiry, setShowInquiry] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "amenities" | "sustainability" | "neighborhood" | "floorplans">("description");

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
    setPrivateUnlocked(false);
    setPrivatePassword("");
  }, [slug]);

  if (!property) {
    return (
      <div className="bg-charcoal min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Property Not Found</h1>
          <p className="text-muted-foreground font-body mb-8">This property may be off-market or no longer available.</p>
          <Link to="/listings" className="inline-flex items-center gap-2 px-6 py-3 gold-gradient text-charcoal font-body text-sm tracking-wide-luxe uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = [property.heroImage, ...property.galleryImages];
  const similarProperties = properties
    .filter((p) => p.id !== property.id && (p.location === property.location || p.type === property.type))
    .slice(0, 3);

  const handlePrivateAccess = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — any password works for demo
    setPrivateUnlocked(true);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('toast', { detail: { message: 'Inquiry sent. Marcus will respond within 24 hours.', type: 'success' } }));
    setShowInquiry(false);
  };

  return (
      <div className="bg-charcoal min-h-screen pt-20">
        {/* Back bar */}
        <div className="container mx-auto px-6 py-4">
        <button
          onClick={() => navigate("/listings")}
          className="flex items-center gap-2 text-sm text-foreground/60 hover:text-gold transition-colors font-body"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Listings
        </button>
      </div>

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={property.heroImage}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="container mx-auto px-6 pb-12">
            {property.offMarket && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal/80 backdrop-blur-sm border border-gold/40 text-gold text-xs tracking-luxe uppercase font-body mb-4">
                <Lock className="w-3.5 h-3.5" />
                Off-Market Opportunity
              </div>
            )}
            <div className="flex items-center gap-2 text-gold/80 text-xs tracking-wide-luxe uppercase font-body mb-3">
              <span className="px-3 py-1 border border-gold/30">{property.type}</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {property.location}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-2 text-shadow-lux">
              {property.title}
            </h1>
            <p className="font-display text-lg md:text-xl text-foreground/70 italic mb-4">
              {property.subtitle}
            </p>
            <div className="font-display text-3xl md:text-4xl text-gold">
              {property.priceDisplay}
            </div>
          </div>
        </div>

        {/* Media buttons */}
        <div className="absolute top-8 right-8 z-10 flex gap-3">
          {property.hasVirtualTour && (
            <button
              onClick={() => setGalleryOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 glass-panel text-gold text-xs tracking-wide-luxe uppercase font-body hover:border-gold/40 transition-colors"
            >
              <Video className="w-4 h-4" />
              Virtual Tour
            </button>
          )}
          {property.hasDroneFootage && (
            <button
              onClick={() => setGalleryOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 glass-panel text-gold text-xs tracking-wide-luxe uppercase font-body hover:border-gold/40 transition-colors"
            >
              <Camera className="w-4 h-4" />
              Drone Footage
            </button>
          )}
        </div>
      </section>

      {/* KEY SPECS BAR */}
      <section className="bg-charcoal-light border-y border-gold/10 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <SpecItem icon={Bed} label="Bedrooms" value={property.bedrooms.toString()} />
            <SpecItem icon={Bath} label="Bathrooms" value={property.bathrooms.toString()} />
            <SpecItem icon={Maximize} label="Interior" value={`${property.sqm} sqm`} />
            <SpecItem icon={TreePine} label="Lot Size" value={property.lotSize} />
            <SpecItem icon={Calendar} label="Year Built" value={property.yearBuilt.toString()} />
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl text-foreground">Gallery</h2>
            <button
              onClick={() => setGalleryOpen(true)}
              className="flex items-center gap-2 text-gold text-xs tracking-wide-luxe uppercase font-body hover:gap-3 transition-all"
            >
              <Eye className="w-4 h-4" />
              View All ({galleryImages.length})
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveImage(i);
                  setGalleryOpen(true);
                }}
                className={cn(
                  "relative overflow-hidden group aspect-[4/3]",
                  i === 0 && "col-span-2 row-span-2 aspect-square md:aspect-[4/3]"
                )}
              >
                <img
                  src={img}
                  alt={`${property.title} ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT + SIDEBAR */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex flex-wrap gap-1 border-b border-gold/10 mb-8">
                {[
                  { id: "description", label: "Description" },
                  { id: "amenities", label: "Amenities" },
                  { id: "sustainability", label: "Sustainability" },
                  { id: "neighborhood", label: "Neighborhood" },
                  { id: "floorplans", label: "Floor Plans" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={cn(
                      "px-5 py-3 text-xs tracking-wide-luxe uppercase font-body transition-colors relative",
                      activeTab === tab.id
                        ? "text-gold"
                        : "text-foreground/50 hover:text-gold/70"
                    )}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-gold" />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {activeTab === "description" && (
                  <div className="animate-fade-in space-y-6">
                    <p className="text-base text-foreground/80 font-body leading-relaxed">
                      {property.description}
                    </p>
                    <div className="luxury-divider" />
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {property.longDescription}
                    </p>
                  </div>
                )}

                {activeTab === "amenities" && (
                  <div className="animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {property.amenities.map((amenity) => (
                        <div
                          key={amenity}
                          className="flex items-center gap-3 p-4 bg-charcoal-lighter border border-gold/5 hover:border-gold/20 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-gold" />
                          </div>
                          <span className="text-sm text-foreground/80 font-body">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "sustainability" && (
                  <div className="animate-fade-in space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Leaf className="w-6 h-6 text-emerald-light" />
                      <h3 className="font-display text-xl text-foreground">Sustainable Luxury Features</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      This property incorporates advanced sustainability features that enhance both environmental responsibility and living comfort, proving that luxury and sustainability are mutually reinforcing.
                    </p>
                    <div className="space-y-3">
                      {property.sustainability.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 p-4 bg-emerald/10 border border-emerald/20"
                        >
                          <Leaf className="w-4 h-4 text-emerald-light flex-shrink-0" />
                          <span className="text-sm text-foreground/80 font-body">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "neighborhood" && (
                  <div className="animate-fade-in space-y-6">
                    <h3 className="font-display text-xl text-foreground">
                      {property.neighborhood.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {property.neighborhood.description}
                    </p>
                    <div className="luxury-divider" />
                    <div className="text-[10px] tracking-luxe text-gold/70 uppercase font-body mb-4">
                      Area Highlights
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {property.neighborhood.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span className="text-sm text-foreground/70 font-body">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    {/* Map placeholder */}
                    <div className="relative aspect-[16/10] bg-charcoal-lighter border border-gold/10 rounded-lg overflow-hidden mt-6">
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `linear-gradient(rgba(197,165,114,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(197,165,114,0.1) 1px, transparent 1px)`,
                          backgroundSize: '40px 40px',
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="w-10 h-10 text-gold/40 mx-auto mb-2" />
                          <p className="text-sm text-foreground/50 font-body">{property.address}</p>
                          <p className="text-xs text-muted-foreground font-body mt-1">Interactive Map · {property.coordinates.lat.toFixed(4)}, {property.coordinates.lng.toFixed(4)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "floorplans" && (
                  <div className="animate-fade-in space-y-6">
                    <h3 className="font-display text-xl text-foreground">
                      {property.floorPlanName}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      Detailed architectural floor plans are available for qualified buyers. Request private access below.
                    </p>
                    <div className="relative aspect-[16/10] bg-charcoal-lighter border border-gold/10 rounded-lg overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `linear-gradient(rgba(197,165,114,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(197,165,114,0.1) 1px, transparent 1px)`,
                          backgroundSize: '30px 30px',
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <FileText className="w-12 h-12 text-gold/30 mx-auto mb-3" />
                          <p className="font-display text-lg text-foreground/60">{property.floorPlanName}</p>
                          <p className="text-xs text-muted-foreground font-body mt-2">Full plans available after qualification</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-40 space-y-6">
                {/* CTA Card */}
                <div className="glass-panel p-6 rounded-lg">
                  <h3 className="font-display text-lg text-foreground mb-1">Private Inquiry</h3>
                  <p className="text-xs text-muted-foreground font-body mb-5">
                    Schedule a confidential viewing or request additional documentation.
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => setShowInquiry(!showInquiry)}
                      className="w-full gold-gradient text-charcoal font-body text-sm font-semibold tracking-wide-luxe uppercase py-3 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      <CalendarIcon className="w-4 h-4" />
                      Schedule Private Viewing
                    </button>
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gold/20 text-gold hover:border-gold/40 transition-colors font-body text-sm tracking-wide-luxe uppercase"
                    >
                      <Mail className="w-4 h-4" />
                      Contact Marcus
                    </Link>
                  </div>

                  {showInquiry && (
                    <form onSubmit={handleInquirySubmit} className="mt-5 pt-5 border-t border-gold/10 space-y-3 animate-fade-in">
                      <input
                        type="text"
                        required
                        placeholder="Full name"
                        className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none font-body"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none font-body"
                      />
                      <input
                        type="tel"
                        placeholder="Phone (optional)"
                        className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none font-body"
                      />
                      <textarea
                        required
                        placeholder="Your inquiry..."
                        rows={3}
                        className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none font-body resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full gold-gradient text-charcoal font-body text-sm font-semibold tracking-wide-luxe uppercase py-3 hover:opacity-90 transition-opacity"
                      >
                        Send Inquiry
                      </button>
                    </form>
                  )}
                </div>
{/* Property Summary */}
                <div className="glass-panel p-6 rounded-lg">
                  <h3 className="font-display text-sm text-gold tracking-luxe uppercase mb-4">Property Summary</h3>
                  <dl className="space-y-3 text-sm font-body">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Type</dt>
                      <dd className="text-foreground/80">{property.type}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Bedrooms</dt>
                      <dd className="text-foreground/80">{property.bedrooms}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Bathrooms</dt>
                      <dd className="text-foreground/80">{property.bathrooms}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Interior</dt>
                      <dd className="text-foreground/80">{property.sqm} sqm</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Lot Size</dt>
                      <dd className="text-foreground/80">{property.lotSize}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Year Built</dt>
                      <dd className="text-foreground/80">{property.yearBuilt}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Location</dt>
                      <dd className="text-foreground/80">{property.location}</dd>
                    </div>
                  </dl>
                </div>

                {/* QR Code Section */}
                <div className="glass-panel p-6 rounded-lg text-center">
                  <h3 className="font-display text-sm text-gold tracking-luxe uppercase mb-4">Property QR Code</h3>
                  <div className="w-32 h-32 mx-auto bg-foreground/5 border border-gold/20 rounded-lg flex items-center justify-center mb-3">
                    <div className="grid grid-cols-8 gap-px w-24 h-24">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            (i % 3 === 0 || i % 5 === 0 || i % 7 === 0 || i < 8 || i > 55) ? "bg-gold" : "bg-transparent"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] text-muted-foreground font-body">
                    Scan to share this property
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE ACCESS SECTION */}
      <section className="py-16 bg-gradient-to-b from-charcoal to-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 text-gold text-xs tracking-luxe uppercase font-body mb-4">
                <Lock className="w-3.5 h-3.5" />
                Private Buyer Section
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                For Qualified Buyers Only
              </h2>
              <p className="text-sm text-muted-foreground font-body max-w-xl mx-auto">
                {property.privateInfo.qualificationRequirements}
              </p>
            </div>

            {!privateUnlocked ? (
              <div className="glass-panel p-8 rounded-lg max-w-md mx-auto">
                <form onSubmit={handlePrivateAccess} className="space-y-4">
                  <div>
                    <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block mb-2">
                      Access Password
                    </label>
                    <input
                      type="password"
                      value={privatePassword}
                      onChange={(e) => setPrivatePassword(e.target.value)}
                      placeholder="Enter password"
                      className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none font-body"
                    />
                    <p className="text-[10px] text-muted-foreground/60 font-body mt-2">
                      Hint: {property.privateInfo.passwordHint}
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full gold-gradient text-charcoal font-body text-sm font-semibold tracking-wide-luxe uppercase py-3 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Shield className="w-4 h-4" />
                    Unlock Private Documents
                  </button>
                </form>
              </div>
            ) : (
              <div className="glass-panel p-8 rounded-lg animate-scale-in">
                <div className="flex items-center gap-2 text-gold mb-6">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm tracking-wide-luxe uppercase font-body">Access Granted</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.privateInfo.documents.map((doc) => (
                    <div
                      key={doc}
                      className="flex items-center gap-3 p-4 bg-charcoal-lighter border border-gold/10 hover:border-gold/30 transition-colors cursor-pointer group"
                    >
                      <FileText className="w-5 h-5 text-gold/60 group-hover:text-gold transition-colors flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-body flex-1">{doc}</span>
                      <ArrowRight className="w-4 h-4 text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SIMILAR PROPERTIES */}
      {similarProperties.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-10">
              Similar Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProperties.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GALLERY LIGHTBOX */}
      {galleryOpen && (
        <div className="fixed inset-0 z-[80] bg-charcoal/98 flex items-center justify-center">
          <button
            onClick={() => setGalleryOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all z-10"
            aria-label="Close gallery"
          >
            ✕
          </button>
          <div className="relative w-full h-full flex items-center justify-center px-16">
            <img
              src={galleryImages[activeImage]}
              alt={`${property.title} ${activeImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            {activeImage > 0 && (
              <button
                onClick={() => setActiveImage(activeImage - 1)}
                className="absolute left-6 w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all"
                aria-label="Previous image"
              >
                <ChevronDown className="w-5 h-5 rotate-90" />
              </button>
            )}
            {activeImage < galleryImages.length - 1 && (
              <button
                onClick={() => setActiveImage(activeImage + 1)}
                className="absolute right-6 w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all"
                aria-label="Next image"
              >
                <ChevronDown className="w-5 h-5 -rotate-90" />
              </button>
            )}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/70 text-sm font-body">
              {activeImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SpecItem({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center text-center md:flex-row md:items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <div>
        <div className="text-[10px] tracking-wide-luxe text-muted-foreground uppercase font-body">{label}</div>
        <div className="font-display text-sm text-foreground">{value}</div>
      </div>
    </div>
  );
}