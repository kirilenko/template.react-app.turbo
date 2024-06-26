export const envList = [
  'VITE_GLOBAL_KEY',
  'VITE_GLOBAL_KEY_FROM_ADDITIONAL_ENV',
  'VITE_LOCAL_KEY',
  'VITE_TIMESTAMP',
] as const

type EnvKey = typeof envList[number]

const envConfig: Record<EnvKey, 'boolean' | 'number' | 'string'> = {
  VITE_GLOBAL_KEY: 'string',
  VITE_GLOBAL_KEY_FROM_ADDITIONAL_ENV: 'string',
  VITE_LOCAL_KEY: 'string',
  VITE_TIMESTAMP: 'string',
}

const env: Record<EnvKey, boolean | null | number | string> = Object.keys(
  envConfig,
).reduce((acc, key) => {
  const type = envConfig[key as EnvKey]
  const value = import.meta.env[key as EnvKey] ?? null
  if (value === null) {
    return { ...acc, [key]: null }
  }

  switch (type) {
    case 'boolean':
      return { ...acc, [key]: value === 'true' }

    case 'number':
      return {
        ...acc,
        [key]: Number.isNaN(+value) ? null : +value,
      }

    default:
      return { ...acc, [key]: value }
  }
}, {} as Record<EnvKey, boolean | null | number | string>)

export default env
