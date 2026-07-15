import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { locations, propertyTypes, allAmenities } from "@/data/content";
import { cn } from "@/lib/utils";

export interface SearchFilters {
  location: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  amenities: string[];
}

export default function SearchBar({ compact = false }: { compact?: boolean }) {
  const navigate = useNavigate();
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    amenities: [],
  });

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (filters.location) params.set("location", filters.location);
    if (filters.propertyType) params.set("type", filters.propertyType);
    if (filters.minPrice) params.set("minPrice", filters.minPrice);
    if (filters.maxPrice) params.set("maxPrice", filters.maxPrice);
    if (filters.amenities.length) params.set("amenities", filters.amenities.join(","));
    navigate(`/listings?${params.toString()}`);
  };

  const toggleAmenity = (amenity: string) => {
    setFilters((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  return (
    <div className={cn("w-full", compact ? "" : "max-w-5xl mx-auto")}>
      <div className="glass-panel rounded-lg p-6 md:p-8">
        {/* Main Search Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block">
              Location
            </label>
            <div className="relative">
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-3 text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors font-body appearance-none cursor-pointer"
              >
                <option value="">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block">
              Property Type
            </label>
            <div className="relative">
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-3 text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors font-body appearance-none cursor-pointer"
              >
                <option value="">All Types</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block">
              Min Price (€)
            </label>
            <select
              value={filters.minPrice}
              onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
              className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-3 text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors font-body appearance-none cursor-pointer"
            >
              <option value="">No Minimum</option>
              <option value="10000000">€10M</option>
              <option value="15000000">€15M</option>
              <option value="20000000">€20M</option>
              <option value="30000000">€30M</option>
              <option value="40000000">€40M</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] tracking-luxe text-gold/70 uppercase font-body block">
              Max Price (€)
            </label>
            <div className="flex gap-2">
              <select
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                className="w-full bg-charcoal-lighter border border-gold/15 px-4 py-3 text-sm text-foreground focus:border-gold/50 focus:outline-none transition-colors font-body appearance-none cursor-pointer"
              >
                <option value="">No Maximum</option>
                <option value="20000000">€20M</option>
                <option value="30000000">€30M</option>
                <option value="40000000">€40M</option>
                <option value="50000000">€50M+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
          <button
            onClick={handleSearch}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3.5 gold-gradient text-charcoal font-body text-sm font-semibold tracking-wide-luxe uppercase hover:opacity-90 transition-opacity"
          >
            <Search className="w-4 h-4" />
            Search Properties
          </button>
          <button
            onClick={() => setAdvancedOpen(!advancedOpen)}
            className="flex items-center gap-2 px-5 py-3.5 border border-gold/20 text-foreground/70 hover:text-gold hover:border-gold/40 transition-colors font-body text-sm tracking-wide-luxe uppercase"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Advanced Filters
            <ChevronDown className={cn("w-4 h-4 transition-transform", advancedOpen && "rotate-180")} />
          </button>
        </div>

        {/* Advanced Filters */}
        {advancedOpen && (
          <div className="mt-6 pt-6 border-t border-gold/10 animate-fade-in">
            <div className="text-[10px] tracking-luxe text-gold/70 uppercase font-body mb-4">
              Amenities & Features
            </div>
            <div className="flex flex-wrap gap-2">
              {allAmenities.map((amenity) => (
                <button
                  key={amenity}
                  onClick={() => toggleAmenity(amenity)}
                  className={cn(
                    "px-4 py-2 text-xs font-body tracking-wide transition-all duration-300 border",
                    filters.amenities.includes(amenity)
                      ? "gold-gradient text-charcoal border-gold"
                      : "border-gold/15 text-foreground/60 hover:border-gold/40 hover:text-gold"
                  )}
                >
                  {amenity}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

