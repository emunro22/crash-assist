import { NextRequest, NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/auth'
import { getCustomers, addCustomer } from '@/lib/db'

export async function GET() {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const customers = await getCustomers()
  return NextResponse.json(customers)
}

export async function POST(req: NextRequest) {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const data = await req.json()
  const customer = await addCustomer(data)
  return NextResponse.json(customer, { status: 201 })
}
