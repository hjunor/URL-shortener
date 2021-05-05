import { EntityRepository, Repository } from 'typeorm';
import Link from '../models/Link'

@EntityRepository(Link)
class LinkRepository extends Repository<Link> {}

export default LinkRepository;