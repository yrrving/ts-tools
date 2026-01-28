import {
  Image,
  Palette,
  FileSearch,
  QrCode,
  Calculator,
  Ruler,
  ArrowLeftRight,
  Clock,
  Hash,
  Lock,
  FileText,
  Languages,
  Globe,
  Gauge,
  Keyboard,
  FileJson,
  type LucideIcon,
} from 'lucide-react'

export type DeviceType = 'dator' | 'mobil' | 'båda'
export type ConnectionType = 'online' | 'offline'
export type Category = 'alla' | 'dator' | 'mobil' | 'online' | 'offline'

export interface Tool {
  name: string
  route: string
  description: string
  device: DeviceType
  connection: ConnectionType
  icon: LucideIcon
}

export const tools: Tool[] = [
  {
    name: 'PNG till SVG',
    route: '/png-till-svg',
    description: 'Konvertera PNG-bilder till SVG-format',
    device: 'dator',
    connection: 'offline',
    icon: Image,
  },
  {
    name: 'Färgpalett',
    route: '/fargpalett',
    description: 'Skapa och hantera färgpaletter',
    device: 'dator',
    connection: 'offline',
    icon: Palette,
  },
  {
    name: 'Filanalys',
    route: '/filanalys',
    description: 'Analysera filinnehåll och metadata',
    device: 'dator',
    connection: 'offline',
    icon: FileSearch,
  },
  {
    name: 'QR-kod',
    route: '/qr-kod',
    description: 'Generera och skanna QR-koder',
    device: 'mobil',
    connection: 'offline',
    icon: QrCode,
  },
  {
    name: 'Rabatträknare',
    route: '/rabattraknare',
    description: 'Beräkna rabatter och slutpriser',
    device: 'mobil',
    connection: 'offline',
    icon: Calculator,
  },
  {
    name: 'Linjal',
    route: '/linjal',
    description: 'Mät avstånd på skärmen',
    device: 'mobil',
    connection: 'offline',
    icon: Ruler,
  },
  {
    name: 'Enhetsomvandlare',
    route: '/enhetsomvandlare',
    description: 'Konvertera mellan olika måttenheter',
    device: 'mobil',
    connection: 'offline',
    icon: ArrowLeftRight,
  },
  {
    name: 'Tidszoner',
    route: '/tidszoner',
    description: 'Jämför tid i olika tidszoner',
    device: 'båda',
    connection: 'offline',
    icon: Clock,
  },
  {
    name: 'Hash-generator',
    route: '/hash-generator',
    description: 'Generera MD5, SHA-256 och andra hash-värden',
    device: 'dator',
    connection: 'offline',
    icon: Hash,
  },
  {
    name: 'Lösenordsgenerator',
    route: '/losenordsgenerator',
    description: 'Skapa starka och säkra lösenord',
    device: 'båda',
    connection: 'offline',
    icon: Lock,
  },
  {
    name: 'Textverktyg',
    route: '/textverktyg',
    description: 'Räkna ord, tecken och transformera text',
    device: 'båda',
    connection: 'offline',
    icon: FileText,
  },
  {
    name: 'Översättare',
    route: '/oversattare',
    description: 'Översätt text mellan olika språk',
    device: 'båda',
    connection: 'online',
    icon: Languages,
  },
  {
    name: 'IP-info',
    route: '/ip-info',
    description: 'Visa din IP-adress och nätverksinformation',
    device: 'båda',
    connection: 'online',
    icon: Globe,
  },
  {
    name: 'Bandbreddstest',
    route: '/bandbreddstest',
    description: 'Testa din internetanslutningshastighet',
    device: 'båda',
    connection: 'online',
    icon: Gauge,
  },
  {
    name: 'Tangentbordstest',
    route: '/tangentbordstest',
    description: 'Testa tangentbordets knappar och funktioner',
    device: 'dator',
    connection: 'offline',
    icon: Keyboard,
  },
  {
    name: 'JSON-formaterare',
    route: '/json-formaterare',
    description: 'Formatera och validera JSON-data',
    device: 'dator',
    connection: 'offline',
    icon: FileJson,
  },
]
