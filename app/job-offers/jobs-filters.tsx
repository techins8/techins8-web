"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import type { KeyboardEvent } from "react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface JobsFiltersProps {
  initialSkills: string[];
  initialLocations: string[];
}

export const JobsFilters = ({ initialSkills, initialLocations }: JobsFiltersProps) => {
  const router = useRouter();

  const [skills, setSkills] = useState<string[]>(initialSkills);
  const [locations, setLocations] = useState<string[]>(initialLocations);
  const [skillInput, setSkillInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  const pushUrl = (newSkills: string[], newLocations: string[]) => {
    const params = new URLSearchParams();
    params.set("page", "1");
    for (const s of newSkills) params.append("skills", s);
    for (const l of newLocations) params.append("locations", l);
    router.push(`/job-offers?${params.toString()}`);
  };

  const addSkill = () => {
    const value = skillInput.trim();
    if (!value || skills.includes(value)) return;
    const next = [...skills, value];
    setSkills(next);
    setSkillInput("");
    pushUrl(next, locations);
  };

  const removeSkill = (skill: string) => {
    const next = skills.filter((s) => s !== skill);
    setSkills(next);
    pushUrl(next, locations);
  };

  const addLocation = () => {
    const value = locationInput.trim();
    if (!value || locations.includes(value)) return;
    const next = [...locations, value];
    setLocations(next);
    setLocationInput("");
    pushUrl(skills, next);
  };

  const removeLocation = (loc: string) => {
    const next = locations.filter((l) => l !== loc);
    setLocations(next);
    pushUrl(skills, next);
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>, add: () => void) => {
    if (e.key === "Enter") {
      e.preventDefault();
      add();
    }
  };

  const clearAll = () => {
    setSkills([]);
    setLocations([]);
    setSkillInput("");
    setLocationInput("");
    router.push("/job-offers");
  };

  const hasFilters = skills.length > 0 || locations.length > 0;

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <p className="text-xs font-medium text-muted-foreground mb-1">Technologies</p>
          <div className="flex gap-2">
            <Input
              placeholder="Ex: React, Docker..."
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => handleKey(e, addSkill)}
            />
            <Button variant="outline" size="sm" onClick={addSkill} type="button">
              +
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-xs font-medium text-muted-foreground mb-1">Lieu</p>
          <div className="flex gap-2">
            <Input
              placeholder="Ex: Paris, Lyon..."
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              onKeyDown={(e) => handleKey(e, addLocation)}
            />
            <Button variant="outline" size="sm" onClick={addLocation} type="button">
              +
            </Button>
          </div>
        </div>
      </div>

      {hasFilters && (
        <div className="flex flex-wrap gap-2 items-center">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="techins8"
              className="flex items-center gap-1 cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => removeSkill(skill)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  removeSkill(skill);
                }
              }}
            >
              {skill}
              <X className="w-3 h-3" />
            </Badge>
          ))}
          {locations.map((loc) => (
            <Badge
              key={loc}
              variant="outline"
              className="flex items-center gap-1 cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => removeLocation(loc)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  removeLocation(loc);
                }
              }}
            >
              {loc}
              <X className="w-3 h-3" />
            </Badge>
          ))}
          <button
            type="button"
            onClick={clearAll}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
          >
            Tout effacer
          </button>
        </div>
      )}
    </div>
  );
};
