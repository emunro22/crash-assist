import { isAdminAuthenticated } from '@/lib/auth'
import AdminLogin from './AdminLogin'
import AdminDashboard from './AdminDashboard'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const auth = await isAdminAuthenticated()
  return auth ? <AdminDashboard /> : <AdminLogin />
}
