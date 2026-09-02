export type Project = {
  slug: string;
  no: string;
  title: string;
  house: string;
  summary: string;
  period: string;
  role: string;
  overview: string[];
  highlights: string[];
  tech: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "hot-corrosion-304hcu",
    no: "01",
    title: "Hot Corrosion of 304HCu Stainless Steel",
    house: "Materials Alchemy",
    summary:
      "Tested 304HCu coated with Na2SO4–75%NaCl at 750°C; weld metal corroded 2× faster than parent metal.",
    period: "2024 – 2025",
    role: "Researcher — materials & corrosion testing",
    overview: [
      "A cyclic hot-corrosion study on 304HCu austenitic stainless steel, a candidate material for advanced ultra-supercritical boiler tubing, exposed to an aggressive Na2SO4–75%NaCl salt film at 750°C.",
      "Parent metal, weld metal and the heat affected zone were compared through mass-gain kinetics and surface characterisation to understand how welding alters the protective chromium oxide scale.",
    ],
    highlights: [
      "Weld metal degraded roughly twice as fast as the parent metal under identical exposure.",
      "48.25% higher oxidation recorded in the weld region, traced to chromium depletion at the fusion zone.",
      "Kinetic curves plotted across cycles to identify the transition from protective to breakaway oxidation.",
    ],
    tech: ["Materials Science", "Hot Corrosion", "Metallurgy", "SEM/EDS", "Research"],
    links: [],
  },
  {
    slug: "radial-power-combiner",
    no: "02",
    title: "12-Way Radial Power Combiner",
    house: "ISRO-ISTRAC",
    summary:
      "X-band radial power combiner with an advanced heat sink — 2% better deep-space transmission, 95% lower cost.",
    period: "Project Trainee, 2025",
    role: "Design & thermal analysis trainee",
    overview: [
      "Built during a project traineeship at ISRO-ISTRAC, this 12-way radial power combiner merges the output of twelve X-band solid-state amplifiers into a single high-power feed for deep-space ground station uplinks.",
      "The mechanical work focused on an advanced heat-sink geometry that keeps junction temperatures inside limits while retaining the tight RF symmetry the combiner needs.",
    ],
    highlights: [
      "Improved deep-space data transmission efficiency by 2% over the existing assembly.",
      "Reduced procurement cost by 95% by replacing an imported unit with an in-house design.",
      "Steady-state and transient thermal simulation in ANSYS to size fins and validate the heat path.",
    ],
    tech: ["ANSYS Workbench", "Thermal Analysis", "SolidWorks", "RF Hardware", "Design for Manufacture"],
    links: [],
  },
  {
    slug: "portable-charging-station",
    no: "03",
    title: "Portable Sustainable Charging Station",
    house: "Renewable Craft",
    summary:
      "A wind + solar charging station delivering up to 65 W from wind and 60 W from solar for remote areas.",
    period: "2024",
    role: "Product designer & prototype lead",
    overview: [
      "A compact, deployable charging station for regions without reliable grid access, combining a vertical-axis wind turbine with a foldable solar array in a single carryable frame.",
      "The design balances output against packed volume so a single person can transport, deploy and orient the unit without tools.",
    ],
    highlights: [
      "Up to 65 W harvested from wind and 60 W from solar under test conditions.",
      "Hybrid charge controller so both sources can feed the battery pack simultaneously.",
      "Modelled, simulated and prototyped end to end, including frame stiffness checks.",
    ],
    tech: ["Product Design", "SolidWorks", "Renewable Energy", "Rapid Prototyping"],
    links: [],
  },
  {
    slug: "brake-disc-thermal-study",
    no: "04",
    title: "Thermo-Mechanical Study of Brake Discs",
    house: "Automotive Forge",
    summary:
      "Ventilated brake disc compared across four materials — Al6061-T6 dissipated 138% more heat than cast iron.",
    period: "2023 – 2024",
    role: "FEA analyst & co-author",
    overview: [
      "A coupled thermal–structural finite element study of a radial ventilated disc brake, evaluating metal matrix composites and lightweight alloys against conventional grey cast iron.",
      "The work was published in Advances in Additive Manufacturing Technologies (Taylor & Francis, 2024).",
    ],
    highlights: [
      "Al6061-T6 showed 138% higher heat dissipation than cast iron.",
      "C/SiC delivered 92% and Ti-6Al-4V 70% improvements in dissipation.",
      "Von Mises stress and thermal gradient maps used to judge braking-cycle survivability.",
    ],
    tech: ["ANSYS", "FEA", "Thermal Analysis", "Composites", "Automotive"],
    links: [
      {
        label: "Publication — Taylor & Francis",
        href: "https://www.taylorfrancis.com/",
      },
    ],
  },
  {
    slug: "multi-stage-rocket",
    no: "05",
    title: "Multi-Stage Rocket Design",
    house: "Feynman Aerospace",
    summary:
      "Single- and multi-stage rockets simulated in SolidWorks and OpenRocket, reaching 2,278 m apogee at 361 m/s.",
    period: "Rocket Design Intern, 2024",
    role: "Design & simulation intern",
    overview: [
      "Designed airframes, fin geometry and staging for solid-motor sounding rockets, then validated flight performance through simulation before build.",
      "Iterated on stability margin, drag and recovery deployment altitude across single- and two-stage configurations.",
    ],
    highlights: [
      "Peak simulated apogee of 2,278 m at a maximum velocity of 361 m/s.",
      "Reloadable solid motor configuration selected for repeatable test flights.",
      "Stability calibre maintained above 1.5 across the full burn profile.",
    ],
    tech: ["SolidWorks", "OpenRocket", "Aerodynamics", "Aerospace Design"],
    links: [],
  },
  {
    slug: "two-plate-injection-mold",
    no: "06",
    title: "Two-Plate Plastic Injection Mold",
    house: "CIPET Workshop",
    summary:
      "Two-plate injection mold prototyped in CREO with EMX flow simulation — 20% less material waste.",
    period: "2022 – 2023",
    role: "Mold designer",
    overview: [
      "A complete two-plate injection mold — core, cavity, feed system, ejection and cooling — designed in CREO Parametric with the EMX mold-design extension.",
      "Filling and cooling simulation guided gate placement and runner balance before any steel was cut.",
    ],
    highlights: [
      "Reduced material waste by 20% through a balanced runner and optimised gate location.",
      "Cooling-channel layout tuned to shorten cycle time and limit warpage.",
      "Full manufacturing drawing set produced with GD&T callouts.",
    ],
    tech: ["CREO Parametric", "EMX", "Mold Design", "Flow Simulation", "GD&T"],
    links: [],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
