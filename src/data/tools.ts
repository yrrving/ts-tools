import {
  Image,
  Palette,
  FileSearch,
  QrCode,
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
  Speech,
  Mic,
  Binary,
  Regex,
  ImageDown,
  Eye,
  FileVideo,
  Scissors,
  type LucideIcon,
} from 'lucide-react'

export type DeviceType = 'dator' | 'mobil' | 'båda'
export type ConnectionType = 'online' | 'offline'
export type Category = 'alla' | 'dator' | 'mobil' | 'online' | 'offline'

export interface Tool {
  id: string
  route: string
  device: DeviceType
  connection: ConnectionType
  icon: LucideIcon
}

export const tools: Tool[] = [
  {
    id: 'png-till-svg',
    route: '/png-till-svg',
    device: 'dator',
    connection: 'offline',
    icon: Image,
  },
  {
    id: 'fargpalett',
    route: '/fargpalett',
    device: 'dator',
    connection: 'offline',
    icon: Palette,
  },
  {
    id: 'filanalys',
    route: '/filanalys',
    device: 'dator',
    connection: 'offline',
    icon: FileSearch,
  },
  {
    id: 'qr-kod',
    route: '/qr-kod',
    device: 'mobil',
    connection: 'offline',
    icon: QrCode,
  },
  {
    id: 'base64-kodare',
    route: '/base64-kodare',
    device: 'båda',
    connection: 'offline',
    icon: Binary,
  },
  {
    id: 'linjal',
    route: '/linjal',
    device: 'mobil',
    connection: 'offline',
    icon: Ruler,
  },
  {
    id: 'enhetsomvandlare',
    route: '/enhetsomvandlare',
    device: 'mobil',
    connection: 'offline',
    icon: ArrowLeftRight,
  },
  {
    id: 'tidszoner',
    route: '/tidszoner',
    device: 'båda',
    connection: 'offline',
    icon: Clock,
  },
  {
    id: 'hash-generator',
    route: '/hash-generator',
    device: 'dator',
    connection: 'offline',
    icon: Hash,
  },
  {
    id: 'losenordsgenerator',
    route: '/losenordsgenerator',
    device: 'båda',
    connection: 'offline',
    icon: Lock,
  },
  {
    id: 'textverktyg',
    route: '/textverktyg',
    device: 'båda',
    connection: 'offline',
    icon: FileText,
  },
  {
    id: 'oversattare',
    route: '/oversattare',
    device: 'båda',
    connection: 'online',
    icon: Languages,
  },
  {
    id: 'ip-info',
    route: '/ip-info',
    device: 'båda',
    connection: 'online',
    icon: Globe,
  },
  {
    id: 'bandbreddstest',
    route: '/bandbreddstest',
    device: 'båda',
    connection: 'online',
    icon: Gauge,
  },
  {
    id: 'tangentbordstest',
    route: '/tangentbordstest',
    device: 'dator',
    connection: 'offline',
    icon: Keyboard,
  },
  {
    id: 'json-formaterare',
    route: '/json-formaterare',
    device: 'dator',
    connection: 'offline',
    icon: FileJson,
  },
  {
    id: 'text-till-tal',
    route: '/text-till-tal',
    device: 'båda',
    connection: 'online',
    icon: Speech,
  },
  {
    id: 'tal-till-text',
    route: '/tal-till-text',
    device: 'båda',
    connection: 'online',
    icon: Mic,
  },
  {
    id: 'regex-testare',
    route: '/regex-testare',
    device: 'dator',
    connection: 'offline',
    icon: Regex,
  },
  {
    id: 'bildkomprimering',
    route: '/bildkomprimering',
    device: 'båda',
    connection: 'offline',
    icon: ImageDown,
  },
  {
    id: 'markdown-forhandsgranskning',
    route: '/markdown-forhandsgranskning',
    device: 'båda',
    connection: 'offline',
    icon: Eye,
  },
  {
    id: 'mediakonverterare',
    route: '/mediakonverterare',
    device: 'dator',
    connection: 'offline',
    icon: FileVideo,
  },
  {
    id: 'brodyrkortsvisare',
    route: '/brodyrkortsvisare',
    device: 'dator',
    connection: 'offline',
    icon: Scissors,
  },
]
