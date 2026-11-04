"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { openings } from "@/lib/content";

const teams = ["All", "Blockchain", "AI", "Product"] as const;
const storageKey = "blos-career-applications";

type Application = {
  roleId: string;
  role: string;
  name: string;
  email: string;
  place: string;
  note: string;
};

const fieldClass =
  "mt-1 w-full rounded-lg border border-[#ead9c2] bg-white px-3 py-2 text-sm text-[#1c1917] outline-none placeholder:text-[#8a8175] focus:border-[#d4843a]";

export function CareersBoard() {
  const [team, setTeam] = useState<(typeof teams)[number]>("All");
  const [roleId, setRoleId] = useState(openings[0].id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [saved, setSaved] = useState<Application | null>(null);
  const [ready, setReady] = useState(false);

  const visible = useMemo(
    () => openings.filter((role) => team === "All" || role.team === team),
    [team],
  );
  const selected = visible.find((role) => role.id === roleId) ?? visible[0];

  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      setReady(true);
      return;
    }
    try {
      const parsed = JSON.parse(raw) as Application;
      if (parsed?.roleId && parsed?.email) setSaved(parsed);
    } catch {
      window.localStorage.removeItem(storageKey);
    }
    setReady(true);
  }, []);

  function chooseTeam(next: (typeof teams)[number]) {
    setTeam(next);
    const nextRoles = openings.filter((role) => next === "All" || role.team === next);
    if (!nextRoles.some((role) => role.id === roleId)) setRoleId(nextRoles[0]?.id ?? roleId);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!selected) return;
    const nextErrors: { name?: string; email?: string } = {};
    if (name.trim().length < 2) nextErrors.name = "Add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) nextErrors.email = "Use a real email address.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const application: Application = {
      roleId: selected.id,
      role: selected.title,
      name: name.trim(),
      email: email.trim(),
      place: place.trim(),
      note: note.trim(),
    };
    window.localStorage.setItem(storageKey, JSON.stringify(application));
    setSaved(application);
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      <div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Teams">
          {teams.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={team === item}
              onClick={() => chooseTeam(item)}
              className={`rounded-full px-4 py-1.5 text-sm ${
                team === item ? "bg-[#1c1917] text-[#f8f1e4]" : "bg-[#f3e6d2] text-[#3f3832]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-8 text-slate-600">No open roles on this team right now.</p>
        ) : (
          <ul className="mt-6 space-y-3">
            {visible.map((role) => {
              const active = selected?.id === role.id;
              return (
                <li key={role.id}>
                  <button
                    type="button"
                    onClick={() => setRoleId(role.id)}
                    aria-pressed={active}
                    className={`metric-card w-full px-5 py-4 text-left transition ${
                      active ? "border-purple-400/50" : "hover:border-white/20"
                    }`}
                  >
                    <span className="block font-semibold">{role.title}</span>
                    <span className="mt-1 block text-sm text-slate-500">
                      {role.team} · {role.location} · {role.type}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {selected ? (
        <article className="metric-card p-6 md:p-8">
          <p className="text-sm font-medium text-purple-300">{selected.team}</p>
          <h2 className="mt-2 text-2xl font-semibold">{selected.title}</h2>
          <p className="mt-2 text-sm text-slate-500">
            {selected.location} · {selected.type}
          </p>
          <p className="mt-4 text-slate-600">{selected.summary}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{selected.about}</p>
          <h3 className="mt-5 text-sm font-semibold">The work</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {selected.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="mt-8 border-t border-white/10 pt-6">
            {!ready ? (
              <p className="text-sm text-slate-500">Loading applications…</p>
            ) : saved?.roleId === selected.id ? (
              <div>
                <h3 className="text-lg font-semibold">Application in</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {saved.name} applied for {saved.role}
                  {saved.place ? ` from ${saved.place}` : ""}. Saved on this browser as {saved.email}.
                </p>
                {saved.note ? <p className="mt-3 text-sm text-slate-500">{saved.note}</p> : null}
                <Button
                  type="button"
                  variant="outline"
                  className="mt-5"
                  onClick={() => {
                    window.localStorage.removeItem(storageKey);
                    setSaved(null);
                  }}
                >
                  Withdraw
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <h3 className="text-lg font-semibold">Apply</h3>
                <p className="mt-1 text-sm text-slate-500">
                  {saved
                    ? `You already applied for ${saved.role}. Submitting here replaces that note.`
                    : "Tell us who you are. The note stays in this browser."}
                </p>
                <label className="mt-4 block text-sm">
                  Name
                  <input
                    className={fieldClass}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                  />
                  {errors.name ? <span className="mt-1 block text-xs text-red-400">{errors.name}</span> : null}
                </label>
                <label className="mt-3 block text-sm">
                  Email
                  <input
                    className={fieldClass}
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                  />
                  {errors.email ? <span className="mt-1 block text-xs text-red-400">{errors.email}</span> : null}
                </label>
                <label className="mt-3 block text-sm">
                  Where you work from
                  <input
                    className={fieldClass}
                    value={place}
                    onChange={(event) => setPlace(event.target.value)}
                    placeholder="City, or remote"
                  />
                </label>
                <label className="mt-3 block text-sm">
                  Note
                  <textarea
                    className={`${fieldClass} min-h-24 resize-y`}
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                    placeholder="A project you shipped, or the agent you want to build."
                  />
                </label>
                <Button type="submit" className="mt-5">
                  Submit application
                </Button>
              </form>
            )}
          </div>
        </article>
      ) : null}
    </div>
  );
}
