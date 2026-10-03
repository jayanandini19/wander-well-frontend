import type React from "react";
import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { BarChart3, Users, Map, Package, Hotel, Plane, CalendarCheck, Star, Image, Mail, Settings, Search, Trash2, Plus, Power } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { destinations, packages, hotels, flights, reviews, adminUsers, gallery } from "@/lib/data";
import { useStore } from "@/lib/store";
import { Field } from "./TravelUI";

export const adminNav = [
  ["/admin", "Dashboard", BarChart3], ["/admin/users", "Users", Users], ["/admin/destinations", "Destinations", Map],
  ["/admin/packages", "Packages", Package], ["/admin/hotels", "Hotels", Hotel], ["/admin/flights", "Flights", Plane],
  ["/admin/bookings", "Bookings", CalendarCheck], ["/admin/reviews", "Reviews", Star], ["/admin/gallery", "Gallery", Image],
  ["/admin/messages", "Contact Messages", Mail], ["/admin/settings", "Settings", Settings],
] as const;

export function AdminLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="container-shell grid gap-6 py-8 lg:grid-cols-[230px_minmax(0,1fr)]">
      <aside className="flex gap-1 overflow-x-auto rounded-lg border bg-card p-2 shadow-soft lg:flex-col lg:self-start">
        {adminNav.map(([to, label, I]) => (
          <Link key={to} to={to} activeOptions={{ exact: true }} activeProps={{ className: "bg-primary text-primary-foreground" }}
            className="flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
            <I className="size-4" />{label}
          </Link>
        ))}
      </aside>
      <main className="min-w-0">
        <p className="eyebrow">Admin</p>
        <h1 className="mb-6 font-display text-4xl font-bold">{title}</h1>
        {children}
      </main>
    </div>
  );
}

const trend = [42, 58, 51, 67, 74, 69, 88, 95, 83, 102, 118, 126];
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export function AdminDashboard() {
  const { bookings } = useStore();
  const stats = [["Total users", "12,480"], ["Bookings", String(3240 + bookings.length)], ["Revenue", "$1.84M"], ["Packages", String(packages.length)], ["Hotels", String(hotels.length)], ["Destinations", String(destinations.length)]];
  return (
    <AdminLayout title="Dashboard">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map(([l, v]) => <div key={l} className="rounded-lg border bg-card p-5 shadow-soft"><p className="text-sm text-muted-foreground">{l}</p><p className="mt-1 font-display text-3xl font-bold">{v}</p></div>)}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <div className="rounded-lg border bg-card p-5 shadow-soft">
          <h2 className="font-bold">Booking trends</h2>
          <div className="mt-4 flex h-48 items-end gap-2">{trend.map((v, i) => <div key={i} className="flex flex-1 flex-col items-center gap-1"><div className="w-full rounded-t bg-primary" style={{ height: `${(v / 130) * 100}%` }} /><span className="text-xs text-muted-foreground">{months[i]}</span></div>)}</div>
        </div>
        <div className="rounded-lg border bg-card p-5 shadow-soft">
          <h2 className="font-bold">Popular destinations</h2>
          <div className="mt-4 space-y-3">{destinations.slice(0, 6).map((d, i) => <div key={d.id}><div className="flex justify-between text-sm"><span>{d.name}</span><span>{90 - i * 11}%</span></div><div className="mt-1 h-2 rounded bg-muted"><div className="h-2 rounded bg-secondary" style={{ width: `${90 - i * 11}%` }} /></div></div>)}</div>
        </div>
      </div>
    </AdminLayout>
  );
}

type Row = Record<string, string | number> & { id: string; status: string };

export function AdminTable({ title, rows: initial, columns, statuses = ["Active", "Inactive"] }: { title: string; rows: Row[]; columns: string[]; statuses?: string[] }) {
  const [rows, setRows] = useState(initial);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(0);
  const [adding, setAdding] = useState(false);
  const filtered = useMemo(() => rows.filter(r => JSON.stringify(r).toLowerCase().includes(q.toLowerCase())), [rows, q]);
  const per = 8, view = filtered.slice(page * per, page * per + per), pages = Math.max(1, Math.ceil(filtered.length / per));
  const cycle = (r: Row) => { const s = statuses[(statuses.indexOf(r.status) + 1) % statuses.length] ?? "Active"; setRows(x => x.map(v => v.id === r.id ? { ...v, status: s } : v)); toast.success(`Status changed to ${s}`); };
  const remove = (r: Row) => { if (confirm(`Delete ${r.id}?`)) { setRows(x => x.filter(v => v.id !== r.id)); toast.success("Item deleted"); } };
  return (
    <AdminLayout title={title}>
      <div className="mb-4 flex flex-wrap gap-2">
        <label className="relative flex-1"><Search className="absolute left-3 top-3 size-4 text-muted-foreground" /><input value={q} onChange={e => { setQ(e.target.value); setPage(0); }} placeholder="Search" className="h-10 w-full rounded-md border pl-9 pr-3" /></label>
        <Button onClick={() => setAdding(a => !a)}><Plus />Add new</Button>
      </div>
      {adding && (
        <form className="mb-4 grid gap-3 rounded-lg border bg-card p-4 sm:grid-cols-3" onSubmit={e => { e.preventDefault(); const f = new FormData(e.currentTarget); const r: Row = { id: `N-${Date.now() % 100000}`, status: statuses[0] ?? "Active" }; columns.forEach(c => (r[c] = String(f.get(c) || ""))); setRows(x => [r, ...x]); setAdding(false); toast.success("Item added"); }}>
          {columns.map(c => <Field key={c} name={c} label={c} required />)}
          <Button className="self-end">Save</Button>
        </form>
      )}
      <div className="overflow-x-auto rounded-lg border bg-card shadow-soft">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-muted/50"><tr><th className="p-3">ID</th>{columns.map(c => <th key={c} className="p-3 capitalize">{c}</th>)}<th className="p-3">Status</th><th className="p-3 text-right">Actions</th></tr></thead>
          <tbody>{view.map(r => <tr key={r.id} className="border-t"><td className="p-3 font-mono text-xs">{r.id}</td>{columns.map(c => <td key={c} className="p-3">{r[c]}</td>)}<td className="p-3"><Badge variant={r.status === statuses[0] ? "default" : "secondary"}>{r.status}</Badge></td><td className="p-3 text-right"><Button size="icon" variant="ghost" aria-label="Change status" onClick={() => cycle(r)}><Power /></Button><Button size="icon" variant="ghost" aria-label="Delete" onClick={() => remove(r)}><Trash2 /></Button></td></tr>)}</tbody>
        </table>
        {!view.length && <p className="p-8 text-center text-muted-foreground">No records found.</p>}
      </div>
      <div className="mt-4 flex items-center justify-end gap-2 text-sm"><Button variant="outline" size="sm" disabled={page === 0} onClick={() => setPage(p => p - 1)}>Previous</Button><span>Page {page + 1} of {pages}</span><Button variant="outline" size="sm" disabled={page >= pages - 1} onClick={() => setPage(p => p + 1)}>Next</Button></div>
    </AdminLayout>
  );
}

const items = (list: { id: string; name?: string | undefined; country: string; price?: number | undefined; category: string }[]) => list.map(x => ({ id: x.id, name: x.name ?? "", country: x.country, price: `$${x.price ?? 0}`, category: x.category, status: "Active" }));

export const adminConfigs: Record<string, () => React.ReactElement> = {
  users: () => <AdminTable title="Users" columns={["name", "email", "phone", "joined", "role", "bookings"]} rows={adminUsers.map(u => ({ ...u }))} />,
  destinations: () => <AdminTable title="Destinations" columns={["name", "country", "price", "category"]} rows={items(destinations)} />,
  packages: () => <AdminTable title="Packages" columns={["name", "country", "price", "category"]} rows={items(packages)} />,
  hotels: () => <AdminTable title="Hotels" columns={["name", "country", "price", "category"]} rows={items(hotels)} statuses={["Available", "Unavailable"]} />,
  flights: () => <AdminTable title="Flights" columns={["airline", "route", "price"]} rows={flights.map((f, i) => ({ id: `FL-${200 + i}`, airline: String((f as Record<string, unknown>)["airline"] ?? "Wanderly Air"), route: `${f.from} → ${f.to}`, price: `$${f.price}`, status: "Active" }))} />,
  bookings: () => <BookingsAdmin />,
  reviews: () => <AdminTable title="Reviews" columns={["name", "rating", "title"]} statuses={["Approved", "Pending", "Rejected"]} rows={reviews.map(r => ({ id: String(r.id), name: String((r as Record<string, unknown>)["name"] ?? "Traveler"), rating: r.rating, title: String((r as Record<string, unknown>)["title"] ?? ""), status: "Approved" }))} />,
  gallery: () => <AdminTable title="Gallery" columns={["title", "category"]} statuses={["Published", "Hidden"]} rows={gallery.map((g, i) => ({ id: `G-${i + 1}`, title: g.name ?? "", category: g.category, status: "Published" }))} />,
  messages: () => <AdminTable title="Contact Messages" columns={["from", "subject"]} statuses={["Unread", "Read"]} rows={[["Lena Park", "Group booking to Kyoto"], ["Omar Haddad", "Change travel dates"], ["Grace Kim", "Visa question for Bali"], ["Diego Ruiz", "Honeymoon recommendations"]].map(([from, subject], i) => ({ id: `M-${i + 1}`, from, subject, status: "Unread" }))} />,
};

function BookingsAdmin() {
  const { bookings } = useStore();
  const base = [...bookings, ...adminUsers.map((u, i) => ({ id: `WD-${300100 + i}`, name: destinations[i].name, type: ["Package", "Hotel", "Flight"][i % 3], amount: 900 + i * 410, status: ["Confirmed", "Pending", "Completed", "Cancelled"][i % 4], date: u.joined, customer: u.name }))];
  return <AdminTable title="Bookings" columns={["customer", "type", "name", "date", "amount"]} statuses={["Confirmed", "Pending", "Completed", "Cancelled"]} rows={base.map(b => ({ customer: "You", ...b, amount: `$${b.amount}` }))} />;
}

export function AdminSettings() {
  return (
    <AdminLayout title="Settings">
      <form onSubmit={e => { e.preventDefault(); toast.success("Settings saved"); }} className="grid gap-4 rounded-lg border bg-card p-6 shadow-soft sm:grid-cols-2">
        <Field label="Website name" defaultValue="Wanderly" />
        <Field label="Support email" type="email" defaultValue="hello@wanderly.travel" />
        <Field label="Phone" defaultValue="+1 415 555 0100" />
        <Field label="Currency" defaultValue="USD" />
        <Field label="Instagram" defaultValue="@wanderly" />
        <Field label="Booking hold (hours)" type="number" defaultValue="48" />
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked />Email notifications for new bookings</label>
        <Button className="sm:col-span-2 sm:justify-self-start">Save settings</Button>
      </form>
    </AdminLayout>
  );
}
