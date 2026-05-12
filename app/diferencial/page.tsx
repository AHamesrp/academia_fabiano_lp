import { redirect } from "next/navigation"

/** Rota mantida; a seção na home está desativada — envia para a home. */
export default function DiferencialPage() {
  redirect("/")
}
